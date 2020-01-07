import React from "react";

import { Route } from "react-router-dom";
import "./styles.css";
import HomePage from "./component/HomePage";
import Stories from "./component/Stories";
import SubmitStories from "./component/SubmitStories";
import Login from "./component/Login";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="header">Refugee Stories</h1>
        <div className="nav-links">
          <Navigation />
        </div>
      </nav>
      <Route exact path="/" component={HomePage} />
      <Route path="/stories" component={Stories} />
      <Route path="/submit" component={SubmitStories} />
      <Route path="/login" component={Login} />
      <Footer />
    </div>
  );
};

export default App;
