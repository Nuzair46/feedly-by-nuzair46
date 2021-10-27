import React, { useState, useEffect } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NEWS_DATA from "./api/axios";
import { PageLoader } from "neetoui";
import TopBar from "./components/Common/TopBar";
import Dashboard from "./components/Dashboard";
import ArticlePane from "./components/Dashboard/ArticlePane";

function App() {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      setNews(NEWS_DATA);
      setLoading(false);
    } catch (error) {
      true;
    } finally {
      true;
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <BrowserRouter>
      <TopBar />
      <ToastContainer />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Dashboard news={news} setNews={setNews} />}
        />
        <Route
          exact
          path="/article/:slug"
          render={props => <ArticlePane title={props.match.params.slug} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
