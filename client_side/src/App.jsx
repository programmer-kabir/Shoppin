import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductsLoader from "./loaders/ProductsLoader.js";
import WishlistLoader from "./loaders/WishlistLoader.js";
import ViewProductLoader from "./loaders/ViewProductLoader.js";
import CartLoader from "./loaders/CartLoader.js";
import DashboardOverviewLoader from "./loaders/DashboardOverviewLoader.js";
import AuthProvider from "./providers/AuthProvider.jsx";
import AppStatus from "./components/AppStatus.jsx";
import LogOffRoute from "./components/LogOffRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import Root from "./routes/Root.jsx";
import Error from "./routes/Error.jsx";
import Home from "./routes/Home.jsx";
import Shop from "./routes/Shop.jsx";
import Products from "./routes/Products.jsx";
import ViewProduct from "./routes/ViewProduct.jsx";
import Contact from "./routes/Contact.jsx";
import Login from "./routes/Login.jsx";
import Signup from "./routes/Signup.jsx";
import Wishlist from "./routes/Wishlist.jsx";
import Cart from "./routes/Cart.jsx";
import Checkout from "./routes/Checkout.jsx";
import OrderComplete from "./routes/OrderComplete.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import DashboardOverview from "./routes/DashboardOverview.jsx";
import DashboardProducts from "./routes/DashboardProducts.jsx";
import DashboardProductsRoot from "./routes/DashboardProductsRoot.jsx";
import AddProduct from "./routes/AddProduct.jsx";
import UpdateProduct from "./routes/UpdateProduct.jsx";
import DashboardOrderHistory from "./routes/DashboardOrderHistory.jsx";
import Settings from "./routes/Settings.jsx";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppStatus>
          <AuthProvider>
            <Root />
          </AuthProvider>
        </AppStatus>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
          children: [
            {
              path: "/shop",
              element: <Products />,
              loader: ProductsLoader,
            },
            {
              path: "view-product/:id",
              element: <ViewProduct />,
              loader: ({ params }) => ViewProductLoader(params.id),
            },
          ],
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: (
            <LogOffRoute>
              <Login />
            </LogOffRoute>
          ),
        },
        {
          path: "signup",
          element: (
            <LogOffRoute>
              <Signup />
            </LogOffRoute>
          ),
        },
        {
          path: "wishlist",
          element: <Wishlist />,
          loader: WishlistLoader,
        },
        {
          path: "cart",
          element: <Cart />,
          loader: CartLoader,
        },
        {
          path: "checkout",
          element: <Checkout />,
          loader: CartLoader,
        },
        {
          path: "order-complete",
          element: <OrderComplete />,
        },
        {
          path: "dashboard",
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
          children: [
            {
              path: "/dashboard",
              element: <DashboardOverview />,
              loader: DashboardOverviewLoader,
            },
            {
              path: "products",
              element: (
                <AdminRoute>
                  <DashboardProducts />
                </AdminRoute>
              ),
              children: [
                {
                  path: "/dashboard/products",
                  element: <DashboardProductsRoot />,
                  loader: ProductsLoader,
                },
                {
                  path: "add",
                  element: <AddProduct />,
                },
                {
                  path: "update/:id",
                  element: <UpdateProduct />,
                  loader: ({ params }) => ViewProductLoader(params.id),
                },
              ],
            },
            {
              path: "order-history",
              element: <DashboardOrderHistory />,
            },
          ],
        },
        {
          path: "settings",
          element: (
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <Elements stripe={stripePromise}>
      <RouterProvider router={router} />
    </Elements>
  );
};

export default App;
