import { FETCH_CURRENCY } from "../actions/types";

export default (state = { symbol: "USD", bitcoinPrice: 1000 }, action) => {
  switch (action.type) {
    case FETCH_CURRENCY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
