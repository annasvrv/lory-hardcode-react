import React from "react";

import homeIcon from "../images/Home-icon.svg";
import addIcon from "../images/Add-icon.svg";
import messagesIcon from "../images/Messages-icon.svg";
import profileIcon from "../images/Profile-icon.svg";
import settingIcon from "../images/Setting-icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <nav>
        <div className="Home active footerNavIcon">
          <div className="footerImg">
            <img src={homeIcon} alt="home page" />
          </div>
          <div className="text">Головна</div>
        </div>

        <div className="Messages footerNavIcon">
          <div className="footerImg">
            <img src={messagesIcon} alt="congratulations" />
          </div>
          <div className="text">Мої вітання</div>
        </div>

        <div className="CreateContact footerNavIcon">
          <div className="footerImg">
            <img src={addIcon} alt="create contact" />
          </div>
          <div className="text">Додати</div>
        </div>

        <div className="Profile footerNavIcon">
          <div className="footerImg">
            <img src={profileIcon} alt="profile page" />
          </div>
          <div className="text">Профіль</div>
        </div>

        <div className="Settings footerNavIcon">
          <div className="footerImg">
            <img src={settingIcon} alt="settings" />
          </div>
          <div className="text">Налаштування</div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
