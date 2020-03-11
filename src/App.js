import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import New from "./pages/New";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import Question from "./components/Question";

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <main className="main">
          <Question />
          <Switch>
            <Route exact path="/">
              <New />
            </Route>
            <Route path="/vote">
              <Vote />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
