import React, { useEffect, useState } from "react";
import { FILTER } from "../Common/constants";

import NewsPane from "./NewsPane";

//National, World, Business, Sports.
function Dashboard({ news }) {
  //const [filter, setFilter] = useState(FILTER);
  const [filteredNews, setFilteredNews] = useState([]);
  let filtered = [];
  news.map(item => {
    if (FILTER[item.category]) {
      filtered.push(item);
    }
  });
  useEffect(() => {
    setFilteredNews(filtered);
  }, []);

  return (
    <div>
      {filteredNews.map((item, index) => {
        return <NewsPane key={index} news={item} />;
      })}
    </div>
  );
}

export default Dashboard;
