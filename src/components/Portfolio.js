import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { formatCurrency } from "../utils";
import { fetchCoinPrices, removeCoin, fetchCoinHistory } from "../actions";

import PieChart from "./PieChart";
import PortfolioItem from "./PortfolioItem";
import ChangePercentage from "./ChangePercentage";

const Portfolio = ({
  coins,
  currency,
  fetchCoinPrices,
  fetchCoinHistory,
  removeCoin
}) => {
  const fetchPortfolioCoinPrices = () => {
    const coinArray = coins.map(coin => coin.symbol);
    fetchCoinPrices(coinArray, currency);
    coinArray.forEach(coin => fetchCoinHistory(coin, currency));
  };

  useEffect(fetchPortfolioCoinPrices, [coins.length, currency]);

  useEffect(() => {
    setInterval(fetchPortfolioCoinPrices, 5 * 60 * 1000);
  }, []);

  const coinsLoading = coins.some(coin => coin.loading);

  const totalValue = _.sumBy(coins, "value") || 0;
  const oldValue = coinsLoading ? totalValue : _.sumBy(coins, "oldValue");

  const relativeChange = (totalValue - oldValue) / oldValue;

  return (
    <div className="portfolio">
      <div className="ui center aligned header">
        <h2>My Portfolio</h2>
        <h3>
          {formatCurrency(totalValue)} {currency}
        </h3>
        <div>
          <ChangePercentage value={relativeChange} />
        </div>
      </div>
      <PieChart coins={coins} />
      <div className="ui middle aligned celled selection list">
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

const mapStateToProps = ({
  coinData,
  prices,
  history,
  currency,
  portfolio
}) => {
  const coins = Object.values(portfolio).map(coin => {
    const data = coinData[coin.symbol];
    const price = prices[coin.symbol];
    if (!data || !price) {
      return {
        ...coin,
        loading: true
      };
    }

    let oldPrice = price;
    const historicalPrices = history[coin.symbol];
    if (historicalPrices) {
      const currentUnixTime = Math.round(Date.now() / 1000);
      const historicalPrice = _.chain(historicalPrices)
        .orderBy("time", "desc")
        .find(({ time }) => time <= currentUnixTime - 60 * 60 * 24)
        .value();
      if (historicalPrice) {
        oldPrice = historicalPrice.price;
      }
    }

    return {
      ...coin,
      ...data,
      price,
      oldPrice,
      value: coin.amount * price,
      oldValue: coin.amount * oldPrice
    };
  });

  return { coins: _.orderBy(coins, "value", "desc"), currency };
};

export default connect(
  mapStateToProps,
  { fetchCoinPrices, fetchCoinHistory, removeCoin }
)(Portfolio);
