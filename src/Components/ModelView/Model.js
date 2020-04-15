import React from "react";
import { ProductConsumer } from "../../Context";
import { Link } from "react-router-dom";
import "./Model.scss";

const Model = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModel } = value;
        const { img, title, price } = value.modalProduct;

        if (!modalOpen) {
          return null;
        } else {
          return (
            <div className="model-container">
              <div className="container">
                <div className="row">
                  <div className=" model-content col-8  mx-auto col=md-6 col-lg-4 text-center text-capitalize">
                    <h5>item added to the cart </h5>
                    <img src={img} className="img-fluid" alt="product" />
                    <h5>{title}</h5>
                    <h5 className="text-muted"> price : ${price} </h5>
                    <Link to="/">
                      <button
                        onClick={() => closeModel()}
                        className="back-to-products-btn"
                      >
                        continue shopping
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button
                        onClick={() => closeModel()}
                        className="back-to-products-btn"
                      >
                        go to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Model;
