import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../utils/firebase.config.js";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["_at"]);

  const createAccessToken = (userId) => {
    return fetch(`${import.meta.env.VITE_API_URL}/jwt`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userId),
    })
      .then((response) => response.text())
      .then((token) => {
        setCookie("_at", token, {
          sameSite: "none",
          secure: true,
          maxAge: 21600,
        });

        return token;
      });
  };

  const createUser = (userId) => {
    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: userId, isAdmin: false }),
    });
  };

  const getUserInfo = (userId, token) => {
    return fetch(`${import.meta.env.VITE_API_URL}/users?id=${userId}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };

  const signInWithEP = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password).then((userCred) =>
      createAccessToken({ id: userCred.user.uid })
    );
  };

  const signInWithGoogle = (_) => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider).then((userCred) =>
      createAccessToken({ id: userCred.user.uid }).then((token) =>
        getUserInfo(userCred.user.uid, token).then((result) =>
          result.error ? createUser(userCred.user.uid) : null
        )
      )
    );
  };

  const createUserWithEP = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password).then((userCred) =>
      createUser(userCred.user.uid).then((_) =>
        createAccessToken({ id: userCred.user.uid })
      )
    );

  const updateUser = async (
    id,
    name,
    password,
    address,
    state,
    city,
    postal
  ) => {
    name
      ? await updateProfile(auth.currentUser, {
          displayName: name,
        })
      : null;

    return fetch(`${import.meta.env.VITE_API_URL}/users?id=${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        street: address,
        state,
        city,
        postal,
      }),
    });
  };

  const logOut = (_) =>
    signOut(auth).then((_) =>
      removeCookie("_at", {
        sameSite: "none",
        secure: true,
      })
    );

  const authInfo = {
    loading,
    setLoading,
    userInfo,
    signInWithEP,
    signInWithGoogle,
    createUserWithEP,
    updateUser,
    logOut,
  };

  useEffect(() => {
    const authChange = onAuthStateChanged(auth, (userCred) => {
      if (userCred && cookies._at) {
        getUserInfo(userCred.uid, cookies._at).then((result) => {
          setUserInfo({
            ...userCred,
            ...result,
          });

          setLoading(false);
        });
      } else {
        setUserInfo(null);
      }

      if (!userCred) setLoading(false);
    });

    return () => authChange();
  }, [cookies._at]);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
