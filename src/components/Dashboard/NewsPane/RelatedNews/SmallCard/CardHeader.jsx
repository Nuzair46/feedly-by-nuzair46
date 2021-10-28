import React from "react";

import { Typography } from "neetoui";

function CardHeader({ title }) {
  return (
    <Typography style="h4" className="font-bold text-gray-700">
      {title}
    </Typography>
  );
}

export default CardHeader;
