const ProductsLoader = async (_) => {
  let isGridView = true;
  const shopView = localStorage.getItem("shopView");

  if (shopView) JSON.parse(shopView) !== "grid" ? (isGridView = false) : null;

  const totalProducts = await fetch(
    `${import.meta.env.VITE_API_URL}/products?count=true`
  ).then((response) => response.json());

  return [isGridView, totalProducts];
};

export default ProductsLoader;
