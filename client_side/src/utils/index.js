export const featuredProducts = (_) => {
  return fetch(`${import.meta.env.VITE_API_URL}/products/featured`).then(
    (response) => response.json()
  );
};

export const discountProducts = (_) => {
  return fetch(`${import.meta.env.VITE_API_URL}/products/discount`).then(
    (response) => response.json()
  );
};

export const productCategories = (_) => {
  return fetch(`${import.meta.env.VITE_API_URL}/categories`).then((response) =>
    response.json()
  );
};

export const getCart = (_) => {
  let cart = {};
  const cartProducts = localStorage.getItem("cart");

  if (cartProducts) cart = JSON.parse(cartProducts);

  return cart;
};

export const addCart = (id, shortCart) => {
  const cart = getCart();

  id in cart ? (!shortCart ? cart[id]++ : null) : (cart[id] = 1);

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCart = (id, shortCart) => {
  const cart = getCart();

  !shortCart ? (cart[id] > 0 ? cart[id]-- : null) : delete cart[id];

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const clearCart = (_) => localStorage.removeItem("cart");

export const getWishlist = (_) => {
  let wishlist = [];
  const wishlistProducts = localStorage.getItem("wishlist");

  if (wishlistProducts) wishlist = JSON.parse(wishlistProducts);

  return wishlist;
};

export const addWishlist = (id) => {
  const wishlist = getWishlist();
  let isExist = wishlist.find((productId) => productId === id);

  !isExist ? wishlist.push(id) : null;

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const removeWishlist = (id) => {
  const wishlist = getWishlist();

  wishlist.splice(wishlist.indexOf(id), 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const shoppingCartCalc = (cart) => {
  const totalPrice = cart.reduce(
    (total, current) =>
      total +
      (current.discount ? Math.round(current.price * 0.5) : current.price) *
        current.quantity,
    0
  );

  const totalShippingCharge = cart.reduce(
    (total, current) => total + current.shipping * current.quantity,
    0
  );

  let grandTotal = totalPrice + totalShippingCharge;

  return { totalPrice, totalShippingCharge, grandTotal };
};
