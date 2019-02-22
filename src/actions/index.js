import cryptoCompare from "../api/cryptoCompare";

import {
  FETCH_COIN_DATA,
  FETCH_CURRENCY,
  ADD_PORTFOLIO_COIN,
  EDIT_PORTFOLIO_COIN,
  REMOVE_PORTFOLIO_COIN
} from "./types";

export const fetchCoinData = () => async dispatch => {
  const response = await cryptoCompare.get("/top/mktcapfull", {
    params: { limit: 100, tsym: "BTC" }
  });

  const coinData = response.data.Data.map(
    ({ CoinInfo: coin, RAW: exchangeRate }) => ({
      symbol: coin.Name,
      name: coin.FullName,
      imageUrl: `https://www.cryptocompare.com${coin.ImageUrl}`,
      exchangeRate: exchangeRate.BTC.PRICE
    })
  );

  dispatch({
    type: FETCH_COIN_DATA,
    payload: coinData
  });
};

export const fetchCurrency = (symbol = "USD") => async dispatch => {
  const response = await cryptoCompare.get(`price`, {
    params: { fsym: "BTC", tsyms: symbol }
  });

  const bitcoinPrice = response.data[symbol];

  dispatch({
    type: FETCH_CURRENCY,
    payload: {
      symbol,
      bitcoinPrice
    }
  });
};

export const addCoin = ({ symbol, amount }) => {
  return {
    type: ADD_PORTFOLIO_COIN,
    payload: {
      symbol,
      amount
    }
  };
};

export const editCoin = (coin, { symbol, amount }) => {
  return {
    type: EDIT_PORTFOLIO_COIN,
    payload: {
      coin,
      values: { symbol, amount }
    }
  };
};

export const removeCoin = ({ symbol }) => {
  return {
    type: REMOVE_PORTFOLIO_COIN,
    payload: {
      symbol
    }
  };
};
