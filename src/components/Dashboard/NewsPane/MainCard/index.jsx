import React from "react";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

function MainCard() {
  return (
    <div>
      <img src="https://picsum.photos/200/300" />
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
}

export default MainCard;
