import React from "react";
import { connect } from "react-redux";

import { addCoin } from "../actions";
import CoinForm from "./CoinForm";

const PortfolioItem = ({ coin }) => {
  return (
    <div className="item">
      <img
        alt={coin.symbol}
        className="ui avatar image"
        src="https://via.placeholder.com/50"
      />
      <div className="content">
        <div className="header">{coin.symbol}</div>
        {coin.amount} {coin.symbol}
      </div>
    </div>
  );
};

const Portfolio = ({ coins, addCoin }) => {
  return (
    <div className="portfolio">
      <h2 className="ui center aligned header">My Portfolio</h2>
      <div className="ui segment">
        <div className="ui big middle aligned divided list">
          {coins.map(coin => (
            <PortfolioItem key={coin.symbol} coin={coin} />
          ))}
        </div>
      </div>
      <div className="ui horizontal divider">Add coin to portfolio</div>
      <CoinForm onSubmit={addCoin} />
    </div>
  );
};

const mapStateToProps = ({ portfolio }) => {
  return { coins: Object.values(portfolio) };
};

export default connect(
  mapStateToProps,
  { addCoin }
)(Portfolio);
