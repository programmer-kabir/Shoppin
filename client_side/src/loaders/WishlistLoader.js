import { getWishlist } from "../utils/index.js";

const WishlistLoader = async (_) => {
  const wishlist = getWishlist();

  return await fetch(`${import.meta.env.VITE_API_URL}/products?ids=true`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(wishlist),
  }).then((response) => response.json());
};

export default WishlistLoader;
