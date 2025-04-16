import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import styles from "../components/BestSeller.module.css";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <div className={"main__container"}>
      {/* FILTER */}
      <div className={"filter__options"}>
        <h2 onClick={() => setShowFilter(!showFilter)}>FILTERS</h2>
        {/* FILTER CATEGORIES */}
        <div className={` filter__div ${showFilter ? "" : "is__hidden"}`}>
          <p>CATEGORIES</p>
          <div className={"filter__box"}>
            <div>
              <input onChange={toggleCategory} type="checkbox" value={"Men"} /> Men
            </div>
            <div>
              <input onChange={toggleCategory} type="checkbox" value={"Women"} /> Women
            </div>
            <div>
              <input onChange={toggleCategory} type="checkbox" value={"Kids"} /> Kids
            </div>
          </div>
        </div>
        {/* SUBCATEGORIES */}
        <div className={` filter__div ${showFilter ? "" : "is__hidden"}`}>
          <p>TYPE</p>
          <div className={"filter__box"}>
            <div>
              <input onChange={toggleSubCategory} type="checkbox" value={"Topwear"} /> Topwear
            </div>
            <div>
              <input onChange={toggleSubCategory} type="checkbox" value={"Bottomwear"} /> Bottomwear
            </div>
            <div>
              <input onChange={toggleSubCategory} type="checkbox" value={"Winterwear"} /> Winterwear
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={"filter__results"}>
        <div className={"rightside__header"}>
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* PRODUCT SORT */}
          <select
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          >
            <option value="relevent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* MAP PRODUCTS */}
        <div className={styles.bestseller__grid}>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
