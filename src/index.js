import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import { loadState, saveState } from "./localStorage";
import { fetchCoinData } from "./actions";
import reducers from "./reducers";
import App from "./components/App";

const previousState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  previousState,
  composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(
  _.throttle(() => {
    const { coinData, prices, portfolio, currency } = store.getState();

    saveState({
      coinData,
      prices,
      portfolio,
      currency
    });
  }),
  1000
);

store.dispatch(fetchCoinData({ totalPages: 3 }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
