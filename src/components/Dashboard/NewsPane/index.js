import React from "react";
import MainCard from "./MainCard";
import SmallCard from "./SmallCard";

function NewsPane({ news }) {
  return (
    <div>
      <h1>{news.category} News</h1>
      <MainCard data={news.data} />
      <div className="flex flex-wrap">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
}

export default NewsPane;
