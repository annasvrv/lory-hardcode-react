import React, { useState } from "react";

import { IoHomeOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { BsGear } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e) => {
    setIsActive((current) => !current);
  };
  return (
    <footer className="Footer">
      <div className="Home active">
        <IoHomeOutline role="button" />
      </div>
      <div className="Messages">
        <GoMail role="button" />
      </div>
      <div className="CreateContact">
        <FaPlus role="button" />
      </div>
      <div className="Profile">
        <FaRegUser role="button" />
      </div>
      <div className="Settings">
        <BsGear role="button" />
      </div>
    </footer>
  );
};

export default Footer;
