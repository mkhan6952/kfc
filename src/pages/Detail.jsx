import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../product";

const Detail = () => {
  const { id } = useParams();
  const product = products.find((p) => {
    return p.id == id;
  });

  return (
    <div style={{ textAlign: "center", margin: "60px auto" }}>
      <h2>{product.title}</h2>
      <h2>{product.description}</h2>
    </div>
  );
};

export default Detail;
