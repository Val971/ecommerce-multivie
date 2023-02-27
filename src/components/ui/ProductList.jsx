import React from "react";

import { ProductCard } from "./ProductCard";

export const ProductList = ({ products, onceCol }) => {
  return (
    <div
      className={`grid ${
        onceCol ? "grid-cols-1" : "grid-cols-2"
      } gap-8 mt-14 md:grid-cols-2 lg:grid-cols-4`}
    >
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};
