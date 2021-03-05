import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock } = props.product;
  const productKey = useParams();
  console.log(productKey);
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <Link to="/product/wa">
          <h4 className="product-name">{name}</h4>
        </Link>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>
        <button
          className="main-button"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
