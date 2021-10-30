import React from "react";
import { imgURL } from "../../../../common/constants";

import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

function SmallCard({ data, category }) {
  return (
    <div className="flex">
      <img className="" src={imgURL + "84/84"} />
      <div className="space-y-3 px-5">
        <CardHeader title={data.title} />
        <CardBody
          status={{ date: data.date, time: data.time, author: data.author }}
        />
        <CardFooter data={data} category={category} />
      </div>
    </div>
  );
}

export default SmallCard;
