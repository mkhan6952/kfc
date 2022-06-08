import { React, useState } from "react";
import Card from "../Components/Card";
import { products } from "../product.js";

const Home = () => {
  const [product, setProduct] = useState(products);
  return (
    <div className="row">
      {product.map((p) => (
        <Card prod={p} />
      ))}
    </div>
  );
};

export default Home;
