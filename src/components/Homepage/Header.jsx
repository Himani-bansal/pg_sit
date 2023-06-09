import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "./images/menu.svg";
import play_btn from "./images/Video_play_btn.svg";
import hero_img from "./images/Hero_img.png";
import { useNavigate } from "react-router-dom";
import LoginPage from "../login/LoginPage";
import Navbar from "../Navbar";
function Header() {
  let navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/`);
    } else {
      navigate("/");
    }
  };
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <header>
      <section className="container py-4 py-5">
        <div className="row flex-column-reverse flex-lg-row align-items-center">
          <div className="col-lg-6">
            <h1 className="ff_space fw_500 fs_xxl blue_clr">
              Your Second Home!!!
            </h1>
            <p className="ff_space fw_400 fs_md blk_clr opacity-75 mb-4 mb-sm-5">
              Want to find a Pg to live...you are on right place
            </p>
            <div className="d-flex align-items-center">
              <form className="searchBox gap-3 ms-0" onSubmit={searchSubmitHandler}>
              <input
                type="text"
                placeholder="Find your PG ..."
                onChange={(e) => setKeyword(e.target.value)}
              />
              <div className='"ps-sm-2   col-lg-5  text-center ms-0'>
              <input className='d-inline-block  butn1 ff_space fw_700 fs_sm text-nowrap ms-0 w-100' type="submit" value="Search" />
              </div>
            </form>
              
            </div>
            
          </div>
          <div className="col-lg-6">
            <img className="w-100" src={hero_img} alt="hero_img" />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
