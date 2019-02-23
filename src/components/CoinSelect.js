import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";

const CoinOption = ({ coin: { symbol, name, imageUrl } }) => {
  return (
    <div className="item" data-value={symbol}>
      <img className="ui avatar image" alt={name} src={imageUrl} />
      {name}
    </div>
  );
};

const CoinSelect = ({ coinData, input: { value, onChange } }) => {
  const dropdown = useRef();

  useEffect(() => {
    window.jQuery(dropdown.current).dropdown({ onChange });
  }, [coinData, !!value]);

  return (
    <div ref={dropdown} className="ui search selection dropdown">
      <input type="hidden" name="symbol" value={value} />
      <div className="default text">BTC</div>
      <div className="menu">
        {Object.values(coinData).map(coin => (
          <CoinOption key={coin.symbol} coin={coin} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ coinData }) => {
  return {
    coinData
  };
};

export default connect(mapStateToProps)(CoinSelect);
