import React from "react";

import { Button } from "neetoui";

function CardFooter({ data }) {
  return (
    <Button
      className="leading-4"
      label="Read More"
      style="link"
      to="/article"
      onClick={() => {
        console.log(data);
      }}
    />
  );
}

export default CardFooter;
