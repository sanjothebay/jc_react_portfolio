import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import ContactmePage from "./pages/contactme";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contactme" component={ContactmePage} />
      </Switch>
    </Router>
  );
};

export default App;