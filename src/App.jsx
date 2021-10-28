import React, { useState, useEffect } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TopBar from "./components/Common/TopBar";
import Dashboard from "./components/Dashboard";
import ArticlePane from "./components/Dashboard/ArticlePane";
import ErrorBound from "./components/Common/ErrorBound";

import { PageLoader } from "neetoui";
import { API } from "./api/axios";
import { CATEGORY } from "./components/Common/constants";

function App() {
  const [NEWS, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      const response = await Promise.all(
        CATEGORY.map(category =>
          API.get(`/news?category=${category.toLowerCase()}`)
        )
      );
      const data = await Promise.all(response.map(res => res.data));
      setNews(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
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
