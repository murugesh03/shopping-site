import React, { Fragment } from "react";
import Title from "../Title/Title";
import { ProductConsumer } from "../../Context";
import Product from "../Product/Product";
const ProductList = () => {
  return (
    <Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {(Value) => {
                // console.log(Value);
                return Value.products
                  ? Value.products.map((product) => {
                      // console.log(product);
                      return <Product key={product.id} product={product} />;
                    })
                  : null;
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
