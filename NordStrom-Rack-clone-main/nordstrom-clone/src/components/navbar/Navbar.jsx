import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import SignNameContext from "../../context/SignNameContext";

const Navbar = () => {
  const { userName } = useContext(SignNameContext);
  const nav = useNavigate();
  console.log(userName.name);
  return (
    <div className='navBarDiv'>
      <nav>
        <div className='navbar_logo'>
          <Link to={"/"}>
            <img
              src='https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg'
              alt=''
            />
          </Link>
        </div>
        <div className='navbar_search'>
          <input type='text' placeholder=' Search for products or brands' />
        </div>
        <div className='navbar_cart'>
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
          >
            <span>{userName.name !== "" ? userName.name : "Sign In"}</span>
          </Link>
          <Link
            to='/cart'
            style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
          >
            <i class='uil uil-bag'></i>
          </Link>
        </div>
      </nav>
      <hr />
      <div className='menu_div'>
        <span
          onClick={() => {
            nav("/clearance");
          }}
        >
          Clearance
        </span>
        <span
          onClick={() => {
            nav("/women");
          }}
        >
          Women
        </span>
        <span
          onClick={() => {
            nav("/men");
          }}
        >
          Men
        </span>
        <span
          onClick={() => {
            nav("/kid");
          }}
        >
          Kids
        </span>
        <span
          onClick={() => {
            nav("/shoes");
          }}
        >
          Shoes
        </span>
        <span
          onClick={() => {
            nav("/activeware");
          }}
        >
          Activewear
        </span>
        <span
          onClick={() => {
            nav("/bags");
          }}
        >
          Bags & Accessories
        </span>
        <span
          onClick={() => {
            nav("/beauty");
          }}
        >
          Beauty
        </span>
        <span
          onClick={() => {
            nav("/gift");
          }}
        >
          Gifts
        </span>
        <span>Home</span>
        <span>Flash Events</span>
      </div>
    </div>
  );
};

export default Navbar;
