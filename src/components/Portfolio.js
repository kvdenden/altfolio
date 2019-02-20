import React, { useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchCoinData, fetchCurrency, addCoin, removeCoin } from "../actions";

import PortfolioItem from "./PortfolioItem";
import CoinForm from "./CoinForm";

const Portfolio = ({
  coins,
  currency,
  fetchCoinData,
  fetchCurrency,
  addCoin,
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
      <div className="ui horizontal divider">Add coin to portfolio</div>
      <CoinForm onSubmit={addCoin} />
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
  { fetchCoinData, fetchCurrency, addCoin, removeCoin }
)(Portfolio);
