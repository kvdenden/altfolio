import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { formatCurrency } from "../utils";
import { fetchCoinPrices, removeCoin } from "../actions";

import PieChart from "./PieChart";
import PortfolioItem from "./PortfolioItem";

const Portfolio = ({ coins, currency, fetchCoinPrices, removeCoin }) => {
  const fetchPortfolioCoinPrices = () => {
    fetchCoinPrices(coins.map(coin => coin.symbol), currency);
  };

  useEffect(fetchPortfolioCoinPrices, [coins.length, currency]);

  useEffect(() => {
    setInterval(fetchPortfolioCoinPrices, 5 * 60 * 1000);
  }, []);

  const totalValue = _.sumBy(coins, "value") || 0;

  return (
    <div className="portfolio">
      <div className="ui center aligned header">
        <h2>My Portfolio</h2>
        <h3>
          {formatCurrency(totalValue)} {currency}
        </h3>
      </div>
      <PieChart coins={coins} />
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

const mapStateToProps = ({ coinData, prices, currency, portfolio }) => {
  const coins = Object.values(portfolio).map(coin => {
    const data = coinData[coin.symbol];
    const price = prices[coin.symbol];
    if (!data || !price) {
      return {
        ...coin,
        loading: true
      };
    }

    return {
      ...coin,
      ...data,
      value: coin.amount * price
    };
  });

  return { coins: _.orderBy(coins, "value", "desc"), currency };
};

export default connect(
  mapStateToProps,
  { fetchCoinPrices, removeCoin }
)(Portfolio);
