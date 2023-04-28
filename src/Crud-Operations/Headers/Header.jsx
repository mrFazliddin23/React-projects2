import React, { useContext } from "react";
import "../Headers/Header.scss";
import Logo from "../icons/Logo.svg";
import Karthi from "../images/karthi.png";
import HomeImg from "../icons/home.svg";
import Course from "../icons/course.svg";
import Student from "../icons/students.svg";
import Payment from "../icons/payment.svg";
import Report from "../icons/report.svg";
import Settings from "../icons/settings.svg";
import Xabar from "../icons/qo'ng'iroqcha.svg";
import Logout from "../icons/logout.svg";
import { NavLink } from "react-router-dom";
import { context } from "../Context/Context";

const Header = (setMode) => {
  const { mode } = useContext(context);

  const modeStyle = {
    backgroundColor: mode === "Light" ? "black" : "white",
    color: mode === "Light" ? "black" : "white",
  };

  return (
    <div className="container">
      <header style={modeStyle}>
        <div className="navbar d-flex flex-column align-items-center position-f ixed top-0 start-0">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <div className="d-flex flex-column align-items-center">
            <img className="navbar__img mb-1" src={Karthi} alt="Karthi img" />
            <p className="fw-bold fs-4 mb-1 text-black">Karthi Madesh</p>
            <span className="text-warning fw-normal fs-5">Admin</span>
          </div>

          <ul className="navbar__menu p-0">
            <li className="navbar__menu--list">
              <NavLink
                to="/"
                className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2">
                <img src={HomeImg} alt="home icon" /> Home
              </NavLink>
            </li>

            <li className="navbar__menu--list">
              <NavLink
                to="*"
                className="navbar__menu--link text-black fw-bold d-flex 
              align-items-center gap-2"
              >
                {" "}
                <img src={Course} alt="Course icon" /> Course{" "}
              </NavLink>
            </li>

            <li className="navbar__menu--list ">
              <NavLink
                to="/students"
                className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2"
              >
                <img src={Student} alt="hat icon" />
                Students
              </NavLink>
            </li>

            <li className="navbar__menu--list ">
              <NavLink
                to="/payment"
                className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2"
              >
                <img src={Payment} alt="paymeny icon" /> Payment
              </NavLink>
            </li>

            <li className="navbar__menu--list ">
              <NavLink to="*"
                className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2"
              >
                <img src={Report} alt="report icon" />
                Report
              </NavLink>
            </li>

            <li className="navbar__menu--list ">
              <NavLink
                to="*"
                className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2"
              >
                <img src={Settings} alt="settings icon" />
                Settings
              </NavLink>
            </li>
          </ul>
          <button className="btn text-black border-0 fw-bold">
            Logout <img className="ms-3" src={Logout} alt="Arrow log out" />
          </button>
        </div>

        <div className="d-flex align-items-center gap-3 position-fixed top-0 mt-3 end-0 me-3 search">
          <select className="form-select text-black fw-bold">
            sasasas
            <option selected disabled>
              Select Language
            </option>
            <option>UZB</option>
            <option>Eng</option>
          </select>
          <select
            className="form-select text-black fw-bold"
            onChange={(e) => {
              setMode(e.target.value);
            }}
          >
            <option selected disabled>
              Select Mode
            </option>
            <option>Light</option>
            <option>Night</option>
          </select>

          <input
            type="search"
            className="p-2 form-control search bg-white fw-bold text-black"
            placeholder="Search ..."
          />
          <img src={Xabar} alt="qo'ng'iroqcha" className="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
