import React from "react";
import { ProductConsumer } from "../../Context";
import { Link } from "react-router-dom";
import "./Details.scss";

const Details = () => {
  return (
    <ProductConsumer>
      {(productValues) => {
        // console.log(productValues);
        const {
          id,
          company,
          img,
          info,
          price,
          title,
          inCart,
        } = productValues.detailProducts;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto  col-md-6 my-3 text-capitalize">
                <img src={img} alt="product" className="img-fluid" />
              </div>
              <div className="col-10 mx-auto  col-md-6 my-3 text-capitalize">
                <h2>model: {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  model by : <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>$</span> {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product:
                </p>
                <p className="text-muted lead">{info}</p>
                <Link to="/">
                  <button className="back-to-products-btn">
                    back to products
                  </button>
                </Link>
                <button
                  disabled={inCart ? true : false}
                  onClick={() => {
                    productValues.addToCart(id);
                  }}
                  className="back-to-products-btn add-to-cart"
                >
                  {inCart ? "in cart" : "add to cart"}
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
