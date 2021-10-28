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
    //fetchNews();
    apiCall();
  }, []);

  const apiCall = () => {
    Promise.all(
      CATEGORY.map(category =>
        API.get(`/news?category=${category.toLowerCase()}`)
      )
    )
      .then(responses => {
        return Promise.all(responses.map(response => response.data));
      })
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  //async-await method. has problems
  /*
  const fetchNews = () => {
    CATEGORY.map(async category => {
      try {
        let response = await API.get(`${category.toLowerCase()}`);
        let resp = NEWS;
        resp[category] = response.data;
        setNews(resp);
        console.log(NEWS);
      } catch (error) {
        console.log(error);
      }
    });
  };
  */
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
