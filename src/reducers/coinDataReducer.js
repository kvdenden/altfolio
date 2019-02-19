import _ from "lodash";

import { FETCH_COIN_DATA } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COIN_DATA:
      return { ...state, ..._.mapKeys(action.payload, "symbol") };
    default:
      return state;
  }
};
