import React from "react";

import { Typography } from "neetoui";

function CardBody({ body, status }) {
  return (
    <div>
      <Typography className="text-red-800">
        {status.author} at {status.time} on {status.date}
      </Typography>
      <Typography>{body}</Typography>
    </div>
  );
}

export default CardBody;
