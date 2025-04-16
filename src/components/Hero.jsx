import React from "react";
import { assets } from "../assets/assets";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* HERO LEFT SIDE */}
      <div className={styles.hero__leftside}>
        <div className={styles.hero__description}>
          <div>
            <p>_______________</p>
            <p>Our BestSellers</p>
          </div>
          <h1>Arriaval Latests</h1>
          <div>
            <p>Shop Now</p>
            <p>_______________</p>
          </div>
        </div>
      </div>
      {/* HERO RIGHT SIDE */}
      <img src={assets.hero_img} className={styles.hero__img} alt="" />
    </div>
  );
};

export default Hero;
