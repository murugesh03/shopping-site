import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
const Product = (props) => {
  const { id, title, img, price, inCart } = props.product;
  const handleEvent = () => {};
  return (
    <div className="mx-auto col-md-6 col-lg-3 my-3 product-wrapper">
      <div className="card">
        <div className="img-container p-5" onClick={handleEvent}>
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              console.log("add to cart");
            }}
          >
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                in incart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0"> {title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
