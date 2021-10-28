import React from "react";

import { Typography, Button } from "neetoui";
import { Copy } from "@bigbinary/neeto-icons";
import { imgURL, LOREM_IPSUM } from "../../Common/constants";
import RelatedNews from "../NewsPane/RelatedNews";

function ArticlePane({ state, news, category, slug }) {
  console.log(state, category, slug);
  const inshortURL = `https://www.inshorts.com/en/news/${slug}`;
  let relatedNews;
  let mainNews;
  news.map(item => {
    if (item.category === category) {
      relatedNews = item;
    }
  });
  relatedNews.data.map(item => {
    if (item.url === inshortURL) {
      mainNews = item;
    }
  });
  if (!mainNews) {
    mainNews = state.data;
  }

  return (
    <div className="mx-40 my-4">
      <div className="space-y-8">
        <Typography style="h1" className="font-semibold text-black">
          <span>
            {mainNews.title}
            <Button
              icon={() => <Copy color="#68737D" />}
              className="inline-block ml-1 align-middle"
              style="text"
              onClick={() =>
                navigator.clipboard.writeText(mainNews.readMoreUrl)
              }
            />
          </span>
          <Typography className="text-gray-500 text-xs text-left font-normal mt-4">
            {mainNews.author} at {mainNews.time} on {mainNews.date}
          </Typography>
        </Typography>
        <div className="my-8">
          <img className="block mx-auto w-1/2" src={imgURL + "600/300"} />
        </div>
        <div className="text-gray-800 text-sm space-y-8 border-b pb-8">
          <Typography>{mainNews.content}</Typography>
          <Typography>{LOREM_IPSUM}</Typography>
          <Typography>{LOREM_IPSUM}</Typography>
        </div>
        <div>
          <RelatedNews news={relatedNews} category={category} />
        </div>
      </div>
    </div>
  );
}

export default ArticlePane;
