import React from "react";

import { Typography } from "neetoui";

function CardBody({ body, status }) {
  return (
    <div className="space-y-4">
      <Typography className="text-gray-500 text-xs text-right mr-4">
        {status.author} at {status.time} on {status.date}
      </Typography>
      <Typography className="text-xs leading-5 text-gray-700">
        {body.substring(0, 300)}......
      </Typography>
    </div>
  );
}

export default CardBody;
