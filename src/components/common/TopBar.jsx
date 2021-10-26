import React from "react";

import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

function TopBar() {
  return (
    <Header actionBlock={<Button label="Primary Action" />} title="Layouts" />
  );
}

export default TopBar;
