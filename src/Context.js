import React, { createContext, useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = createContext();

const ProductProvider = (props) => {
  const [productinfo, storeProductinfo] = useState({
    products: [],
    detailProducts: detailProduct,
    cart: [],
  });
  useEffect(() => {
    setProducts();
  }, []);
  const setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    storeProductinfo(() => {
      return { ...productinfo, products: products };
    });
  };

  const getItem = (id) => {
    const product = productinfo.products.find((item) => item.id === id);
    return product;
  };
  const handleDetail = (id) => {
    const product = getItem(id);

    storeProductinfo(() => {
      return { ...productinfo, detailProducts: product };
    });
  };
  const addToCart = (id) => {
    let tempProduct = [...productinfo.products];
    const index = tempProduct.indexOf(getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    storeProductinfo(
      () => {
        return { products: tempProduct, cart: [...productinfo.cart, product] };
      },
      () => {
        console.log([productinfo]);
      }
    );
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
