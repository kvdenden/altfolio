import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import coinDataReducer from "./coinDataReducer";
import portfolioReducer from "./portfolioReducer";
import currencyReducer from "./currencyReducer";

export default combineReducers({
  coinData: coinDataReducer,
  portfolio: portfolioReducer,
  currency: currencyReducer,
  form: formReducer
});
