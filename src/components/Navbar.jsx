import React, { useState } from "react";
import { useNavigate ,Link } from "react-router-dom";
import LoginPage from "./login/LoginPage";
const Navbar = () => {
   
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return <section className="border_bottom">
  <div className="container">
    <nav className="d-flex justify-content-between align-items-center py-4">
      <a className="ff_oleo fw_400 fs_lg blk_clr" href="#">
        PG Seekers
      </a>
      <ul className="d-flex gap-5 m-0 d-none d-lg-flex">
        <li>
          <a
            className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
            href="/homepage"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
            href="#"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
            href="#"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
            href="#"
          >
            Contact Us
          </a>
        </li>
       
      </ul>
      <a
        href={LoginPage}
        className="d-inline-block butn1 ff_space fw_700 fs_sm me-xl-4 d-none d-lg-flex"
      >
        Login
      </a>
      <button
        onClick={() => setNavShow(true)}
        className="d-flex d-lg-none p-2 rounded-2 border_none"
      >
        <img src={""} alt="menu" />
      </button>
    </nav>
    <div className={`${navShow ? "nav-fix white_bg" : "fix-navbar"}`}>
      <button
        onClick={() => setNavShow(false)}
        className="butn1 btn-close position-absolute end-0 top-0 bg-light m-4"
      ></button>
      <nav className="flex-column trans_x d-lg-none d-flex min-vh-100 align-items-center justify-content-center text-center">
        <ul className="m-0 p-0">
          <li className="mb-4">
            <a
              className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="mb-4">
            <a
              className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
              href="#"
            >
              About Us
            </a>
          </li>
          <li className="mb-4">
            <a
              className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
              href="#"
            >
              Contact Us
            </a>
          </li>
          <li className="mb-4">
            <a
              className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
              href="#"
            >
              Services
            </a>
          </li>
         
        </ul>
        <a
          href="/login"
          className="d-inline-block butn1 ff_space fw_700 fs_sm"
        >
          Login
        </a>
      </nav>
    </div>
  </div>
</section>
}

export default Navbar
