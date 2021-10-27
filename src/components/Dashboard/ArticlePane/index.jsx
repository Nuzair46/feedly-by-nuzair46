import React from "react";
import NEWS_DATA from "../../../api/axios";
//import { CATEGORY } from "../../Common/constants";

function ArticlePane({ title }) {
  const inshortUrl = "https://www.inshorts.com/en/news/" + title;
  const dataArray = Object.values(NEWS_DATA);
  let requiredItem;
  let CAT;
  dataArray.forEach(element => {
    element.data.forEach(item => {
      if (item.url === inshortUrl) {
        requiredItem = item;
      }
      CAT = element.category;
      return requiredItem, CAT;
    });
    console.log(CAT, requiredItem);
  });
  return <div>{title}</div>;
}

export default ArticlePane;

/*
let NEWS = CATEGORY.forEach(() => {
    const dataArray = Object.values(NEWS_DATA);
    console.log(dataArray);

  });


return dataArray.forEach(element => {
      if (element.url === inshortUrl) {
        return element;
      }else{
        continue
      }
    });*/
