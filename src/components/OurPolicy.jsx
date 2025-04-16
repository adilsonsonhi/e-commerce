import React from "react";
import { assets } from "../assets/assets";
import style from "./OurPolicy.module.css";

const OurPolicy = () => {
  return (
    <div className={style.our__policy}>
      <div>
        <img src={assets.exchange_icon} alt="" />
        <h3>Easy Exchange Policy</h3>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} alt="" />
        <h3>Easy Exchange Policy</h3>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.support_img} alt="" />
        <h3>Easy Exchange Policy</h3>
        <p>We offer hassle free exchange policy</p>
      </div>
    </div>
  );
};

export default OurPolicy;
