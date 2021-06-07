import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import logo from "./logo.svg";
// import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} exact />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
