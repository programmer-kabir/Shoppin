const ViewProductLoader = async (id) => {
  return await fetch(`${import.meta.env.VITE_API_URL}/products?id=${id}`).then(
    (response) => response.json()
  );
};

export default ViewProductLoader;
