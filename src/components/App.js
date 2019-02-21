import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import Portfolio from "./Portfolio";
import AddCoin from "./AddCoin";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "2em" }}>
      <Router history={history}>
        <>
          <Route path="/" component={Portfolio} />
          <Route path="/add" component={AddCoin} />
          {/* <Route path="/edit/:symbol" component={EditCoin} /> */}
        </>
      </Router>
    </div>
  );
};

export default App;
