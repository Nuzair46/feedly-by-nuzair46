import React from "react";

import { Button } from "neetoui";

function CardFooter({ data }) {
  const slug = data.url.replace("https://www.inshorts.com/en/news/", "");
  return (
    <Button
      className="leading-4"
      label="Read More"
      style="link"
      onClick={() => (window.location.href = `/article/${slug}`)}
    />
  );
}

export default CardFooter;
