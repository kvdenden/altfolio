import { FETCH_COIN_HISTORY } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COIN_HISTORY:
      const { coin, history } = action.payload;
      return { ...state, [coin]: history };
    default:
      return state;
  }
};
