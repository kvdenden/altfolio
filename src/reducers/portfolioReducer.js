import { ADD_PORTFOLIO_COIN } from "../actions/types";

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
    default:
      return state;
  }
};
