import { SET_CURRENCY } from "../actions/types";

export default (state = "USD", action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};
