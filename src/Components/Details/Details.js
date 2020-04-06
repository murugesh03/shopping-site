import React from "react";
import { ProductConsumer} from "../../Context";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <ProductConsumer>
      {(productValues) => {
        const {
          id,
          company,
          img,
          info,
          price,
          title,
          inCart,
        } = productValues.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
