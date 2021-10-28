import React, { useState, useEffect } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PageLoader } from "neetoui";
import TopBar from "./components/Common/TopBar";
import Dashboard from "./components/Dashboard";
import ArticlePane from "./components/Dashboard/ArticlePane";
import { API } from "./api/axios";
import ErrorBound from "./components/Common/ErrorBound";

function App() {
  const [NEWS, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      let response = await API.get(`/news?category=science`); //${item.toLowerCase()}`);
      setNews(response.data);
      localStorage.setItem("newsdata", JSON.stringify(response.data));
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
          render={() => <Dashboard news={NEWS} setNews={setNews} />}
        />
        <Route
          exact
          path="/article/:slug"
          render={props => (
            <ArticlePane
              state={props.location.state}
              slug={props.match.params.slug}
              news={NEWS}
            />
          )}
        />
        <Route component={ErrorBound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
