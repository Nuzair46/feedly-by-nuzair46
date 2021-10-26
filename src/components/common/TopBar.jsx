import React from "react";

import { Filter } from "@bigbinary/neeto-icons";
import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

function TopBar() {
  return (
    <div className="border-b px-6">
      <Header
        title="Feed.ly"
        actionBlock={<Button label="Filter" icon={Filter} style="secondary" />}
      />
    </div>
  );
}

export default TopBar;
