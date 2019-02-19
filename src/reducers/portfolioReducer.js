import _ from "lodash";

import { ADD_PORTFOLIO_COIN, REMOVE_PORTFOLIO_COIN } from "../actions/types";

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

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PORTFOLIO_COIN:
      return { ...state, [action.payload.symbol]: action.payload };
    case REMOVE_PORTFOLIO_COIN:
      return _.omit(state, action.payload.symbol);
    default:
      return state;
  }
};
