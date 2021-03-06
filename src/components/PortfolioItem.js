import React from "react";
import { Link } from "react-router-dom";

import { formatNumber, formatCurrency } from "../utils";
import ChangePercentage from "./ChangePercentage";

const PortfolioItem = ({ coin, currency }) => {
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
    const relativeChange = (coin.price - coin.oldPrice) / coin.oldPrice;
    content = (
      <>
        <img alt={coin.name} className="ui avatar image" src={coin.imageUrl} />
        <div className="content">
          <div className="header">{coin.name}</div>
          <div className="description">
            <small>
              {formatNumber(coin.amount)} {coin.symbol} (
              {formatCurrency(coin.value)} {currency})
            </small>
          </div>
        </div>
        <div
          className="right floated center aligned content"
          style={{ textAlign: "right", lineHeight: "2.5em" }}
        >
          <ChangePercentage value={relativeChange} />
        </div>
      </>
    );
  }

  return (
    <Link to={`/edit/${coin.symbol}`} className="item">
      {content}
    </Link>
  );
};

export default PortfolioItem;
