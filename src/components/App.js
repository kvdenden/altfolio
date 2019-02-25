import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import Header from "./Header";
import Portfolio from "./Portfolio";
import AddCoin from "./AddCoin";
import EditCoin from "./EditCoin";

const App = () => {
  return (
    <Router history={history}>
      <>
        <Header />
        <div className="ui container">
          <Route path="/" component={Portfolio} />
          <Route path="/add" component={AddCoin} />
          <Route path="/edit/:symbol" component={EditCoin} />
        </div>
      </>
    </Router>
  );
};

export default App;
