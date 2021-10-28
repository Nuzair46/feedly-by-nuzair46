import React from "react";

import MainCard from "./MainCard";
import SmallCard from "./SmallCard";

import { Typography } from "neetoui";

function NewsPane({ news }) {
  let smallCardData = news.data;
  smallCardData.shift();

  return (
    <div className="mx-40 mt-20">
      <Typography
        style="h2"
        textTransform="capitalize"
        className="font-semibold text-gray-800 mb-6"
      >
        {news.category} News
      </Typography>
      <MainCard id={0} data={news.data[0]} />
      <div className="flex flex-wrap">
        {smallCardData.slice(1, 5).map((item, index) => {
          return <SmallCard key={index} id={index} data={item} />;
        })}
      </div>
    </div>
  );
}

export default NewsPane;
