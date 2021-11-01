import React, { useEffect } from "react";

import MainCard from "./MainCard";

import { Typography } from "neetoui";
import RelatedNews from "./RelatedNews";

function NewsPane({ news, archived }) {
  let NEWS = { ...news };
  const date = new Date().toLocaleString("default", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });

  useEffect(() => {
    if (!archived) {
      news.data.map(item => {
        if (item.date.startsWith(date)) {
          NEWS.category = news.category;
          NEWS.data.push(item);
        }
      });
    }
  }, [archived]);

  let mainData = NEWS.data[0];
  return (
    <div className="mx-40 mb-10">
      <Typography
        style="h2"
        textTransform="capitalize"
        className="font-semibold text-gray-800 mb-6"
      >
        {NEWS.category} News
      </Typography>
      <MainCard id={0} data={mainData} category={NEWS.category} />
      <RelatedNews news={NEWS} category={NEWS.category} />
    </div>
  );
}

export default NewsPane;
