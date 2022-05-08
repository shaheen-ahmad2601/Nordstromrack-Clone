import "./product-page.css";
import { Activeware } from "./women_data";
import Product_card from "../cardPage/card_page";
import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const name = [
  "Running & Training",
  "Golf",
  "Hiking & Outdoors",
  "Athleisure",
  "New Arrivals",
];
const type = [
  "Activewear",
  "Jackets",
  "Shorts",
  "Socks",
  "Crops",
  "Tanks",
  "Sweatshirts",
  "Golf",
  "Shorts",
  "Socks",
  "Sports",
  "Sweatpants",
  "Sweatshirts",
  "Hoodies",
  "Swim",
  "Tanks",
  "Activewear",
  "Athletic Gear",
  "Equipment",
];
const fiter_type = [
  "Product Type",
  "Size",
  "Color",
  "Brand",
  "Feature",
  "Inseam",
  "Length",
  "Length",
  "Price",
  "Rise",
  "Style",
];
export const Activeware_Page = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("");
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        CustomerRating: "rating",
        PriceHighToLow: "price",
        Newest: "id",
      };
      const sortProperty = types[type];
      const sorted = [...Activeware].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='box-1'>
          {fiter_type.map((r, i) => (
            <div key={i}>
              <div className='filter_type_each'>
                <p className='filter_p_tage'>{r}</p>
                <p className='filter_p1_tage'>+</p>
              </div>
              <hr className='grey' />
            </div>
          ))}
        </div>
        <div className='box-2'>
          <div className='subbox-1-box-2'>
            <p className='workout_title'>
              <strong>For Spring Workouts & Hangouts</strong>
            </p>
            <img
              src='https://n.nordstrommedia.com/id/372ff8ff-74dd-4d85-8749-59a2694a9267.jpeg?h=417&w=1334'
              className='show_img'
            />
            <div className='naming_div'>
              {name.map((e, i) => (
                <div className='img_name' key={i}>
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className='subbox-1-box-2'>
            <p className='workout_title'>
              <strong>Activewear & Workout Clothes for Women</strong>
            </p>
            <div className='category'>
              <div className='category_list'>
                {type.map((e, i) => (
                  //   <li className='category_list_each_item' key={i}>
                  //       <a className='category_list_each_item1'>{e}</a>
                  //   </li>
                  <div className='category_list_each_item' key={i}>
                    {e}
                  </div>
                ))}
              </div>
            </div>
            <div className='total_item'>
              <p className='total_item_1'>1591 items</p>
              <select
                className='sort_by_feature'
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value=''>Custom Sorting</option>
                <option value='CustomerRating'>Sort by customer rating</option>
                <option value='Newest'>Sort by newest</option>
                <option value='PriceHighToLow'>
                  Sort by price: high to low
                </option>
                <option value='PriceLowToHigh'>
                  Sort by price: low to high
                </option>
              </select>
            </div>
            <div className='display_item'>
              {/* <div className='item_card'>
                        <img src="https://n.nordstrommedia.com/id/sr3/e69e9d10-7af6-453d-a78e-b65340704627.jpeg?h=365&w=240&dpr=2"/>
                        <div className='item_card_sub'>
                        <h4 className='new_markdown'>New Markdown</h4>
                        <h4 className='product_name'>Z by Zella</h4>
                        <p className='discription'>Peak Faux Shearling Quarter-Zip Pullover Sweatshirt</p>
                        <div className='price_info'>
                            <p className='price'>$9.99</p>
                            <p className='discount'>(69% off)</p>
                        </div>
                        <p className='strike_price'>$32.97</p>
                        <p className='rating'>&#9733;&#9733;&#9733;&#9733;<span className='whilte'>&#9733;</span></p>
                        <p className='free_shiping'>Free Shipping on Orders $89+</p>
                        <button className='add_to_cart'>Add to Bag</button>
                        </div>
                    </div> */}
              {data.map((ele) => {
                return (
                  <Product_card
                    key={ele.id}
                    name={ele.name}
                    price={ele.price}
                    strprice={ele.origPrice}
                    description={ele.description}
                    image={ele.images}
                    rating={ele.rating}
                    item={ele}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
