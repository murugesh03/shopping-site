import React, { createContext, useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";
import ProductList from "./Components/ProductList/ProductList";
const ProductContext = createContext();

const ProductProvider = (props) => {
  const [productinfo, storeProductinfo] = useState({
    products: [],
    detailProducts: detailProduct,
  });
  const setProducts = () => {
    let products = [];
    storeProducts.forEach(
      (item) => {
        const singleItem = { ...item };
        products = [...products, singleItem];
      },
      [ProductList]
    );
    storeProductinfo(() => {
      return { ...productinfo, products };
    });
  };

  useEffect(() => {
    setProducts();
  }, []);

  const getItem = (id) => {
    const product = productinfo.products.find((item) => item.id === id);
    return product;
  };
  const handleDetail = (id) => {
    const product = getItem(id);

    storeProductinfo(() => {
      return { detailProducts: product };
    });
  };
  const addToCart = (id) => {
    console.log(`hello from add to cart is ${id} `);
  };

  return (
    <ProductContext.Provider
      value={{
        ...productinfo,
        handleDetail: handleDetail,
        addToCart: addToCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
