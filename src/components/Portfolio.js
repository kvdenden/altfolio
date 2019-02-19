import React from "react";
import { connect } from "react-redux";

import { addCoin, removeCoin } from "../actions";
import CoinForm from "./CoinForm";

const PortfolioItem = ({ coin, onRemove }) => {
  return (
    <div className="item">
      <div className="right floated center aligned content">
        <button className="ui basic negative button" onClick={onRemove}>
          <i className="close icon" />
          Remove
        </button>
      </div>
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

const Portfolio = ({ coins, addCoin, removeCoin }) => {
  return (
    <div className="portfolio">
      <h2 className="ui center aligned header">My Portfolio</h2>
      <div className="ui big middle aligned celled list">
        {coins.map(coin => (
          <PortfolioItem
            key={coin.symbol}
            coin={coin}
            onRemove={() => removeCoin(coin)}
          />
        ))}
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
  { addCoin, removeCoin }
)(Portfolio);
