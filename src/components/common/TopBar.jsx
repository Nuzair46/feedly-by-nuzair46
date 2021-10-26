import React from "react";

import { Filter, Search, Notification } from "@bigbinary/neeto-icons";
import { Button, Tooltip } from "neetoui";
import { Header } from "neetoui/layouts";

function TopBar() {
  return (
    <div className="border-b px-6">
      <Header
        title="Feed.ly"
        actionBlock={
          <div className="space-x-3">
            <div className="inline-block align-middle">
              <div className="flex">
                <Tooltip placement={"bottom"} content={"Search"}>
                  <Button icon={() => <Search />} style="text" />
                </Tooltip>
                <Tooltip placement={"bottom"} content={"Subscribe"}>
                  <Button icon={() => <Notification />} style="text" />
                </Tooltip>
              </div>
            </div>
            <Button label="Filter" icon={Filter} style="secondary" />
          </div>
        }
      />
    </div>
  );
}

export default TopBar;
