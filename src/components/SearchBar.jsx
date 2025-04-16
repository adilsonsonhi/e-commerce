import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className={styles.search__bar}>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="search" />
        <img src={assets.search_icon} alt="" />
      </div>
      <img onClick={() => setShowSearch(false)} src={assets.cross_icon} alt="" />
    </div>
  ) : null;
};

export default SearchBar;
