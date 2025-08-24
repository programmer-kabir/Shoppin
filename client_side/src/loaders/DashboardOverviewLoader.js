const DashboardOverviewLoader = async (_) => {
  const totalProducts = await fetch(
    `${import.meta.env.VITE_API_URL}/products?count=true`
  ).then((response) => response.json());

  const totalOrders = await fetch(
    `${import.meta.env.VITE_API_URL}/orders?count=true`
  ).then((response) => response.json());

  return [totalProducts, totalOrders];
};

export default DashboardOverviewLoader;
