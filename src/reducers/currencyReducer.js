import { FETCH_CURRENCY } from "../actions/types";

export default (state = "USD", action) => {
  switch (action.type) {
    case FETCH_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};
