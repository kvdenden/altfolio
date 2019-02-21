import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCoinData, fetchCurrency, removeCoin } from "../actions";

import PortfolioItem from "./PortfolioItem";

const Portfolio = ({
  coins,
  currency,
  fetchCoinData,
  fetchCurrency,
  removeCoin
}) => {
  useEffect(() => {
    fetchCoinData();
    fetchCurrency();
  }, []);

  const totalValue = _.sumBy(coins, "value") || 0;

  return (
    <div className="portfolio">
      <div className="ui center aligned header">
        <h2>My Portfolio</h2>
        <h3>
          {totalValue.toFixed(2)} {currency.symbol}
        </h3>
      </div>
      <div className="ui middle aligned celled list">
        {coins.map(coin => (
          <PortfolioItem
            key={coin.symbol}
            coin={coin}
            currency={currency}
            onRemove={() => removeCoin(coin)}
          />
        ))}
      </div>
      <Link to="/add" className="ui teal button">
        <i className="plus icon" /> Add coin
      </Link>
    </div>
  );
};

const mapStateToProps = ({ coinData, currency, portfolio }) => {
  const coins = Object.values(portfolio).map(coin => {
    const data = coinData[coin.symbol];
    if (!data) {
      return {
        ...coin,
        loading: true
      };
    }

    return {
      ...coin,
      ...data,
      value: coin.amount * data.exchangeRate * currency.bitcoinPrice
    };
  });

  return { coins, currency };
};

export default connect(
  mapStateToProps,
  { fetchCoinData, fetchCurrency, removeCoin }
)(Portfolio);
