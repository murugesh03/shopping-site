import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
const Product = (props) => {
  const { id, title, img, price, inCart } = props.product;

  return (
    <div className="mx-auto col-md-6 col-lg-3 my-3 product-wrapper">
      <div className="card">
        <ProductConsumer>
          {(value) => (
            <div
              className="img-container p-5"
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModel(id);
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
          )}
        </ProductConsumer>
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
