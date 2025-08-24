import React, { useEffect, useState } from "react";
import RelatedProduct from "./RelatedProduct.jsx";

const RelatedProducts = ({ categoryId, productId }) => {
  const [products, setProducts] = useState([]);

  useEffect((_) => {
    fetch(`${import.meta.env.VITE_API_URL}/products?cid=${categoryId}`)
      .then((response) => response.json())
      .then((result) => {
        const restProducts = result.filter((e) => e["_id"] !== productId);
        setProducts(restProducts.slice(0, 4));
      });
  }, []);

  return (
    <div className="max-w-sm sm:max-w-2xl mx-auto mt-10">
      <h3 className="font-bold text-2xl mb-5">Related Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-center">
        {products.map((product) => (
          <RelatedProduct key={product["_id"]} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
