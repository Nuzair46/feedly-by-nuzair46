import React, { useEffect, useState } from "react";
//import { FILTER } from "../Common/constants";

import NewsPane from "./NewsPane";

function Dashboard({ news, filter }) {
  const [filteredNews, setFilteredNews] = useState([]);
  let filtered = [];

  useEffect(() => {
    news.map(item => {
      if (filter[item.category]) {
        filtered.push(item);
      }
    });
    setFilteredNews(filtered);
  }, [filter]);

  return (
    <div>
      {filteredNews.map((item, index) => {
        return <NewsPane key={index} news={item} />;
      })}
    </div>
  );
}

export default Dashboard;
