import React, { createContext, useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = createContext();

const ProductProvider = (props) => {
  const [productinfo, storeProductinfo] = useState({
    products: [],
    detailProduct: detailProduct,
  });
  useEffect(() => {
    setProducts();
  },[]);
  const handelDetail = () => {
    console.log("hello from detail");
  };
  const addToCart = () => {
    console.log("hello from add to cart");
  };

  const setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    storeProductinfo(() => {
      return { products: products };
    });
  };
  return (
    <ProductContext.Provider
      value={{
        ...productinfo,
        handelDetail: handelDetail,
        addToCart: addToCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
