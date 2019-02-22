import React from "react";
import { Link } from "react-router-dom";

const PortfolioItem = ({ coin, currency, onRemove }) => {
  let content;

  if (coin.loading) {
    content = (
      <div className="ui placeholder" style={{ fontSize: "0.5em" }}>
        <div className="ui header image">
          <div className="line" />
          <div className="line" />
        </div>
      </div>
    );
  } else {
    content = (
      <>
        <img alt={coin.name} className="ui avatar image" src={coin.imageUrl} />
        <div className="content">
          <div className="header">{coin.name}</div>
          <div className="description">
            <small>
              {coin.amount} {coin.symbol} ({coin.value.toFixed(2)}{" "}
              {currency.symbol})
            </small>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="item">
      <div className="right floated center aligned content">
        <Link to={`/edit/${coin.symbol}`} className="ui basic button">
          <i className="edit icon" />
          Remove
        </Link>
        <button className="ui basic negative button" onClick={onRemove}>
          <i className="close icon" />
          Remove
        </button>
      </div>
      {content}
    </div>
  );
};

export default PortfolioItem;
