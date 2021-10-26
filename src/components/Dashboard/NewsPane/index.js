import React from "react";

import MainCard from "./MainCard";
import SmallCard from "./SmallCard";

import { Typography } from "neetoui";

function NewsPane({ news }) {
  return (
    <div className="mx-40 mt-20">
      <Typography
        style="h2"
        textTransform="capitalize"
        className="font-semibold text-gray-800 mb-6"
      >
        {news.category} News
      </Typography>
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
