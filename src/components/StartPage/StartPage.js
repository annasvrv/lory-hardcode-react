import React from "react";
import { FaSearch } from "react-icons/fa";

import iconProfile from "../images/icon-profile-LORY.svg";
import calendar from "../images/calendar.svg";
import searchIcon from "../images/search-icon.svg";
import dots from "../images/menu-pages-dots.png";

import "./StartPage.css";

const StartPage = () => {
  return (
    <div className="StartPage">
      <header className="Nav">
        <div className="iconProfile">
          <a href="#">
            <img src={iconProfile} alt="profile icon" />
          </a>
        </div>
        <form className="searchForm">
          <label htmlFor="search">Search Contact</label>
          <div className="input-group flex-nowrap">
            <FaSearch
              role="button"
              tabIndex="0"
              className="input-group-text searchIcon"
              id="addon-wrapping"
            />

            {/* <img src={searchIcon} alt="search icon" /> */}

            <input type="text" id="search" placeholder="Пошук" />
          </div>
        </form>
        {/* <div className="contacts"></div> */}
        <div className="calendar">
          <a href="#">
            <img src={calendar} alt="calendar" />
          </a>
        </div>
      </header>
      <div className="menuPages">
        <img src={dots} alt="slide menu" />
      </div>
    </div>
  );
};

export default StartPage;
