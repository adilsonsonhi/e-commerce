import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`}>
      <div className={styles.img__container}>
        <img src={image[0]} alt="" />
      </div>
      <h3 className={styles.product__name}>{name}</h3>
      <span className={styles.product__price}>
        {currency}
        {price}
      </span>
    </Link>
  );
};

export default ProductItem;
