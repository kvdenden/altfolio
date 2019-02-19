import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import coinDataReducer from "./coinDataReducer";
import portfolioReducer from "./portfolioReducer";

export default combineReducers({
  coinData: coinDataReducer,
  portfolio: portfolioReducer,
  form: formReducer
});
