import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TopBar from "./components/Common/TopBar";
import Dashboard from "./components/Dashboard";
import ArticlePane from "./components/Dashboard/ArticlePane";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/article/:id" render={() => <ArticlePane />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
