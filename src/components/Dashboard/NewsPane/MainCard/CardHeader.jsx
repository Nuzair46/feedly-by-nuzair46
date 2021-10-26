import React from "react";

import { Typography } from "neetoui";

function CardHeader({ title }) {
  return (
    <Typography style="h3" className="font-semibold leading-8 text-gray-700">
      {title}
    </Typography>
  );
}

export default CardHeader;
