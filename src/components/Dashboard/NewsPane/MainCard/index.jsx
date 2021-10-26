import React from "react";
import { imgURL } from "../../../Common/constants";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

function MainCard({ data }) {
  const url = imgURL + "526/263";
  return (
    <div className="flex border-b border-gray-300 mb-2">
      <div className="w-full mb-6">
        <img src={url} />
      </div>
      <div className="m-4 mt-0 space-y-4">
        <CardHeader title={data.title} />
        <CardBody
          body={data.content}
          status={{
            date: data.date,
            time: data.time,
            author: data.author,
          }}
        />
        <CardFooter />
      </div>
    </div>
  );
}

export default MainCard;
