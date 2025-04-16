import React from "react";
import styles from "./NewsletterBox.module.css";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.newsletter__box}>
      <h2>Subscribe Now and get 20% off</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form onSubmit={onSubmitHandler}>
        <input className="input-field email" type="email" placeholder="Enter your email" />
        <button className="btn btn-submit" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
