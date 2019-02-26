import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import coinDataReducer from "./coinDataReducer";
import priceReducer from "./priceReducer";
import historyReducer from "./historyReducer";
import portfolioReducer from "./portfolioReducer";
import currencyReducer from "./currencyReducer";

export default combineReducers({
  coinData: coinDataReducer,
  prices: priceReducer,
  history: historyReducer,
  portfolio: portfolioReducer,
  currency: currencyReducer,
  form: formReducer
});
