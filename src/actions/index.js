import _ from "lodash";

import cryptoCompare from "../api/cryptoCompare";

import {
  FETCH_COIN_DATA,
  SET_CURRENCY,
  ADD_PORTFOLIO_COIN,
  EDIT_PORTFOLIO_COIN,
  REMOVE_PORTFOLIO_COIN,
  FETCH_COIN_PRICES
} from "./types";

export const fetchCoinData = ({ totalPages = 1 }) => async dispatch => {
  let page = 0;
  let moreCoins = true;
  while (page < totalPages && moreCoins) {
    const response = await cryptoCompare.get("/top/mktcapfull", {
      params: { limit: 100, tsym: "BTC", page }
    });

    const coinData = response.data.Data.map(({ CoinInfo: coin }) => ({
      symbol: coin.Name,
      name: coin.FullName,
      imageUrl: `https://www.cryptocompare.com${coin.ImageUrl}`
    }));

    if (coinData.length === 0) {
      moreCoins = false;
    } else {
      dispatch({
        type: FETCH_COIN_DATA,
        payload: coinData
      });

      page++;
    }
  }
};

export const fetchCoinPrices = (coins, currency) => async dispatch => {
  const response = await cryptoCompare.get(`pricemulti`, {
    params: { fsyms: _.join(coins, ","), tsyms: currency }
  });

  const prices = _.mapValues(response.data, currency);
  dispatch({
    type: FETCH_COIN_PRICES,
    payload: {
      currency,
      prices
    }
  });
};

export const setCurrency = currency => {
  return {
    type: SET_CURRENCY,
    payload: currency
  };
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
