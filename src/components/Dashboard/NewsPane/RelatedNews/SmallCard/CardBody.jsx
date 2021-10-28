import React from "react";

import { Typography } from "neetoui";

function CardBody({ status }) {
  return (
    <Typography className="text-xs text-gray-500">
      {status.author} at {status.time} on {status.date}
    </Typography>
  );
}

export default CardBody;
