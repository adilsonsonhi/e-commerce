import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__top}>
        <div className="">
          <Link to="/">
            <h2 className={styles.footer__logo}>SHEIN.ao</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nobis tempore illo vel dolorum minima quibusdam veritatis suscipit eum cumque, quidem ea atque.
          </p>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3>Collections</h3>
          <ul>
            <li>Best Seller</li>
            <li>Men's clothes</li>
            <li>Women's clothes</li>
            <li>Child</li>
          </ul>
        </div>

        <div>
          <h3>Get In Touch</h3>
          <ul>
            <li>+123 456 789</li>
            <li>contact@email.com</li>
          </ul>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <small>&copy; 2024 adilsonsonhi - All rights reserved</small>
      </div>
    </div>
  );
};

export default Footer;
