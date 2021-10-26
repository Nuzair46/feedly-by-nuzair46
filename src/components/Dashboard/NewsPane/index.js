import React from "react";
import MainCard from "./MainCard";
import SmallCard from "./SmallCard";

function NewsPane() {
  return (
    <div>
      <h1>CATEGORY</h1>
      <MainCard />
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
