import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import styles from "./BestSeller.module.css";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className={styles.bestseller__collection}>
      <div className={styles.bestseller__description}>
        <h2>
          <Title text1={"MAIS"} text2={"VENDIDOS"} />
        </h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>

      <div className={styles.bestseller__grid}>
        {bestSeller.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
