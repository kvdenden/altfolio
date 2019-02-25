import React from "react";
import { Link } from "react-router-dom";
import CurrencySelect from "./CurrencySelect";

const Header = () => {
  return (
    <div className="ui inverted menu">
      <div className="ui container">
        <Link to="/" className="borderless header item">
          <img
            className="logo"
            src="/img/altfolio.png"
            alt="altfolio"
            style={{ marginRight: "1.5em" }}
          />
          Altfolio
        </Link>
        <div className="right menu">
          <CurrencySelect />
        </div>
      </div>
    </div>
  );
};

export default Header;
