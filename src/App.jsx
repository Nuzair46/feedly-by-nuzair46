import React, { useState, useEffect } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TopBar from "./components/common/TopBar";
import Dashboard from "./components/Dashboard";
import ArticlePane from "./components/Dashboard/ArticlePane";
import ErrorBound from "./components/common/ErrorBound";

import { PageLoader } from "neetoui";
import { API } from "./api/axios";
import { CATEGORY } from "./components/common/constants";

function App() {
  const [NEWS, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchNews, setSearchNews] = useState(NEWS);
  const [filter, setFilter] = useState(
    JSON.parse(localStorage.getItem("filter"))
  );

  const [archived, setArchived] = useState(false);

  useEffect(() => {
    apiCall();
  }, [filter]);

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
      <TopBar
        filter={filter}
        setFilter={setFilter}
        searchNews={searchNews}
        setSearchNews={setSearchNews}
        news={NEWS}
        archived={archived}
        setArchived={setArchived}
      />
      <ToastContainer />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Dashboard
              news={NEWS}
              filter={filter}
              setFilter={setFilter}
              searchNews={searchNews}
              setSearchNews={setSearchNews}
              archived={archived}
              setArchived={setArchived}
            />
          )}
        />
        <Route
          exact
          path="/article/:category/:slug"
          render={props => (
            <ArticlePane
              state={props.location.state}
              slug={props.match.params.slug}
              category={props.match.params.category}
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
