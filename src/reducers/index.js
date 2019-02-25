import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import coinDataReducer from "./coinDataReducer";
import priceReducer from "./priceReducer";
import portfolioReducer from "./portfolioReducer";
import currencyReducer from "./currencyReducer";

export default combineReducers({
  coinData: coinDataReducer,
  prices: priceReducer,
  portfolio: portfolioReducer,
  currency: currencyReducer,
  form: formReducer
});
