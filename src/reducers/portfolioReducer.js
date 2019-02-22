import _ from "lodash";

import {
  ADD_PORTFOLIO_COIN,
  EDIT_PORTFOLIO_COIN,
  REMOVE_PORTFOLIO_COIN
} from "../actions/types";

const INITIAL_STATE = {
  BTC: {
    symbol: "BTC",
    amount: 0.5
  },
  ETH: {
    symbol: "ETH",
    amount: 10
  }
};

const replaceCoin = (coins, fromCoin, toCoin) => {
  return _.keyBy(
    Object.keys(coins).map(symbol =>
      symbol === fromCoin.symbol ? toCoin : coins[symbol]
    ),
    "symbol"
  );
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PORTFOLIO_COIN:
      return { ...state, [action.payload.symbol]: action.payload };
    case EDIT_PORTFOLIO_COIN:
      return replaceCoin(state, action.payload.coin, action.payload.values);
    case REMOVE_PORTFOLIO_COIN:
      return _.omit(state, action.payload.symbol);
    default:
      return state;
  }
};
