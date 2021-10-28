import React from "react";

import { Button } from "neetoui";
import { Link } from "react-router-dom";

function CardFooter({ data }) {
  //const slug = data.url.replace("https://www.inshorts.com/en/news/", "");
  return (
    <Link
      to={{
        pathname: `/article`,
        state: {
          data: data,
        },
      }}
    >
      <Button className="leading-4" label="Read More" style="link" />
    </Link>
  );
}

export default CardFooter;
