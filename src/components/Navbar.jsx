import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);

  return (
    <div className={styles.navbar}>
      <header className={styles.header}>
        {/* HEADER LOGO */}
        <Link to="/">
          <h2 className={styles.nav__logo}>SHEIN.ao</h2>
        </Link>

        {/* HEADER NAV LIST */}
        <nav className={styles.nav__menu}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Início</span>
          </NavLink>
          <NavLink to="/collection" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Lançamentos</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Sobre nós</span>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Contacto</span>
          </NavLink>
        </nav>

        {/* HEADER NAV ACTIONS */}
        <div className={styles.navbar__actions}>
          <img onClick={() => setShowSearch(true)} src={assets.search_icon} className={styles.action__btn} alt="" />
          <div className={styles.profile__menu}>
            <img src={assets.profile_icon} className={styles.action__btn} alt="" />
            <div className={styles.profile__dropdown}>
              <ul className={styles.profile__content}>
                <li>
                  <img src={assets.profile_icon} alt="" />
                  <span>Perfil</span>
                </li>
                <li>
                  <img src={assets.bin_icon} alt="" />
                  <span>Pedidos</span>
                </li>
                <li>
                  <img src={assets.cross_icon} alt="" />
                  <span>Terminar Sessão</span>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/cart" className={`${styles.cart__btn} ${styles.action__btn}`}>
            <img src={assets.cart_icon} className={styles.action__btn} alt="" />
            <span>10</span>
          </Link>
          <img onClick={() => setVisible(true)} src={assets.menu_icon} className={`${styles.menu__button} ${styles.action__btn} is__hidden`} alt="" />
        </div>
      </header>

      {/* SIDEBAR MENU FOR MOBILE DEVIES */}
      <aside className={`${styles.mobile__menu} ${visible ? "menu__visible" : "menu__hidden"}`}>
        <div className={styles.mobile__content}>
          <div onClick={() => setVisible(false)} className={styles.mobile__header}>
            <img src={assets.dropdown_icon} className={`${styles.action__btn} ${styles.dropdown__icon}`} alt="" />
            <span>Back</span>
          </div>
          <NavLink onClick={() => setVisible(false)} to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Home</span>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Collection</span>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>About</span>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Contact</span>
          </NavLink>
        </div>
      </aside>

      {/* OVERLAY */}
      <div onClick={() => setVisible(false)} className={`${styles.overlay} ${visible ? "is__visible" : "is__hidden"}`}></div>
    </div>
  );
};

export default Navbar;
