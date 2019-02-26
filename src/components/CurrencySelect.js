import React from "react";
import { connect } from "react-redux";

import { setCurrency } from "../actions";

const DropdownOption = ({ option, onClick }) => {
  return (
    <div className="item" onClick={onClick}>
      {option}
    </div>
  );
};

const CurrencySelect = ({ currency, setCurrency }) => {
  const currencies = ["BTC", "USD", "EUR", "GBP", "JPY"];

  return (
    <div className="ui simple dropdown item">
      {currency}
      <i className="dropdown icon" />
      <div className="menu">
        {currencies.map(option => (
          <DropdownOption
            key={option}
            option={option}
            onClick={() => setCurrency(option)}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ currency }) => {
  return { currency };
};

export default connect(
  mapStateToProps,
  { setCurrency }
)(CurrencySelect);
