import React, { useEffect, useState } from "react";
import { API } from "../../api/axios";
import NewsPane from "./NewsPane";

function Dashboard() {
  const [news, setNews] = useState({});

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      const response = await API.get("/news?category=science");
      setNews(response.data);
    } catch (error) {
      true;
    } finally {
      true;
    }
  };

  return (
    <div>
      <NewsPane />
      {news.category}
    </div>
  );
}

export default Dashboard;
