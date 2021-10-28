import React from "react";
import { imgURL } from "../../../Common/constants";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

function MainCard({ data, category }) {
  const url = imgURL + "650/300";
  return (
    <div className="flex border-b w-full border-gray-300 mb-6">
      <div className="w-1/2 mb-6">
        <img src={url} />
      </div>
      <div className="m-4 mt-0 w-1/2 space-y-4">
        <CardHeader title={data.title} />
        <CardBody
          body={data.content}
          status={{
            date: data.date,
            time: data.time,
            author: data.author,
          }}
        />
        <CardFooter data={data} category={category} />
      </div>
    </div>
  );
}

export default MainCard;
