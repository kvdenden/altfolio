import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import portfolioReducer from "./portfolioReducer";

export default combineReducers({
  portfolio: portfolioReducer,
  form: formReducer
});
