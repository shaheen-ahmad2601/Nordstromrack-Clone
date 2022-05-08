import React, { useState, useEffect } from "react";
import "./clearance.css";
import { CleranceCategory } from "./CleranceCategory";
import { clearance } from "./clearanceData";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export const Clearance = () => {
  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/men").then(({ data }) => {
  //     // console.log(data);
  //     setProduct(data);
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <div>
        <div>
          <CleranceCategory />
        </div>
        <p className='product-heading'>Clothing for Men</p>
        <div className='list-container'>
          <ul>
            <li>All Clothing</li>
            <li>Activewear</li>
            <li>Blazers & Sports Coats</li>
            <li>Coats & Jacket</li>
            <li>Dress Shirts</li>
            <li>Golf</li>
            <li>Jeans</li>
            <li>Joggers & Sweatpants</li>
            <li>Pants</li>
            <li>Polo Shirts</li>
          </ul>
        </div>
        <div className='container1'>
          {clearance.map((el) => (
            <div className='single-div'>
              <img width='200px' src={el.images} alt='' />
              <div className='description'>
                <p className='bold-text'>{el.brand}</p>
                <p>{el.name}</p>
                <p className='bold-text'>{"BestPrice - " + el.price}</p>

                <p>
                  OriginalPrice - <strike>{el.origPrice}</strike>
                </p>
                <p>hello</p>

                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
              <div>
                <button className='button-align'>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
