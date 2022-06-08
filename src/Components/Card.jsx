import React from "react";
import { Link } from "react-router-dom";
import p from "../assets/images/image1.png";

const Card = ({ prod }) => {
  return (
    <div className="col-md-4">
      <Link to={`/detail/${prod.id}`}>
        <div className="card">
          <img src={p} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{prod.title}</h5>
            <p className="card-text">{prod.description}</p>
            <a href="#" className="btn btn-primary">
              PKR : {prod.price}/
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
