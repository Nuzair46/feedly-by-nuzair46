import React from "react";

import { ReactComponent as ErrorIcon } from "../../assets/Error.svg";
import { Home } from "@bigbinary/neeto-icons";
import { Typography, Button } from "neetoui";

function ErrorBound() {
  return (
    <div className="table absolute top-0 left-0 h-full w-full">
      <div className="table-cell align-middle">
        <div className="space-y-6 text-center w-1/6 mx-auto">
          <ErrorIcon className="m-auto" />
          <Typography
            style="h3"
            className="text-center font-semibold to-gray-800"
          >
            You have landed somwhere unknown.
          </Typography>
          <Button
            icon={Home}
            iconPosition="left"
            label="Take me home"
            style="secondary"
            to="/"
          />
        </div>
      </div>
    </div>
  );
}

export default ErrorBound;
