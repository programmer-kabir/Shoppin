import { getCart } from "../utils/index.js";

const CartLoader = async (_) => {
  const cart = [];
  const cartProducts = getCart();
  const cartProductsId = Object.keys(cartProducts);

  const products = await fetch(
    `${import.meta.env.VITE_API_URL}/products?ids=true`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProductsId),
    }
  ).then((response) => response.json());

  for (let productId in cartProducts) {
    const cartProduct = products.find(
      (product) => product["_id"] === productId
    );
    cart.push({ ...cartProduct, quantity: cartProducts[productId] });
  }

  return cart;
};

export default CartLoader;
