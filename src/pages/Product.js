import React from "react";
import products from "../products.json";

const Product = () => {
  return (
    <>
      <h1 className="product-title">Digital Merchandise</h1>
      <p className="product-text">One stop shop for digital abstract merch</p>
      <div className="container">
        <main className="grid">
          {products.map((product) => {
            return (
              <article>
                <img
                  className="product-img"
                  src={product.image}
                  alt="Product Image"
                />
                <div>
                  <h2>${product.price}</h2>
                </div>
                <div className="product-name">
                  <h3>{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </article>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Product;
