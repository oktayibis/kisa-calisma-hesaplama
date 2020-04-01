import React from "react";
//libraries
import { HashRouter as Router, Route } from "react-router-dom";
//pages
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router >
      <Route exact path='/'>
        <Homepage />
      </Route>
    </Router>
  );
}

export default App;
