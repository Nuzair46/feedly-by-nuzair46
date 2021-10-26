import React, { useEffect, useState } from "react";
import { API } from "../../api/axios";
import NewsPane from "./NewsPane";

import { PageLoader } from "neetoui";

function Dashboard() {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      const response = await API.get("/news?category=science");
      setNews(response.data);
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
    <div>
      <NewsPane news={news} />
    </div>
  );
}

export default Dashboard;
