import React from "react";

function ArticlePane({ data }) {
  return <div>{JSON.stringify(data.title)}</div>;
}

export default ArticlePane;
