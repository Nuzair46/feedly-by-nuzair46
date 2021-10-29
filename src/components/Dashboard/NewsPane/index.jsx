import React from "react";

import MainCard from "./MainCard";

import { Typography } from "neetoui";
import RelatedNews from "./RelatedNews";

function NewsPane({ news }) {
  let mainData = news.data[0];
  return (
    <div className="mx-40 mb-10">
      <Typography
        style="h2"
        textTransform="capitalize"
        className="font-semibold text-gray-800 mb-6"
      >
        {news.category} News
      </Typography>
      <MainCard id={0} data={mainData} category={news.category} />
      <RelatedNews news={news} category={news.category} />
    </div>
  );
}

export default NewsPane;
