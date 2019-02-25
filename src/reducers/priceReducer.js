import { FETCH_COIN_PRICES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COIN_PRICES:
      return { ...state, ...action.payload.prices };
    default:
      return state;
  }
};
