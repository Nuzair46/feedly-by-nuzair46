import React from "react";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

function SmallCard() {
  return (
    <div>
      <img src="https://picsum.photos/200" />
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
}

export default SmallCard;
