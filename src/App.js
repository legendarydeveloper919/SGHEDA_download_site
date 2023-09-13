import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import License from "./pages/license";
import Contact from "./pages/contact";
import Payment from "./pages/payment";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/license" component={License} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/payment/:amount" component={Payment} exact />
      </Switch>
    </Router>
  );
}

export default App;
