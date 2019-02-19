import { ADD_PORTFOLIO_COIN, REMOVE_PORTFOLIO_COIN } from "./types";

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
