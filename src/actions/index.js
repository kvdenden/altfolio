import cryptoCompare from "../api/cryptoCompare";

import {
  FETCH_COIN_DATA,
  ADD_PORTFOLIO_COIN,
  REMOVE_PORTFOLIO_COIN
} from "./types";

export const fetchCoinData = () => async dispatch => {
  const response = await cryptoCompare.get("/top/mktcapfull", {
    params: { limit: 100, tsym: "USD" }
  });

  const coinData = response.data.Data.map(({ CoinInfo: coin }) => ({
    symbol: coin.Name,
    name: coin.FullName,
    imageUrl: `https://www.cryptocompare.com${coin.ImageUrl}`
  }));

  dispatch({
    type: FETCH_COIN_DATA,
    payload: coinData
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

export const removeCoin = ({ symbol }) => {
  return {
    type: REMOVE_PORTFOLIO_COIN,
    payload: {
      symbol
    }
  };
};
