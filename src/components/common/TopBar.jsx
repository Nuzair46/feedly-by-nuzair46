import React, { useState } from "react";

import { Filter, Search, Notification } from "@bigbinary/neeto-icons";
import { Button, Tooltip, Typography } from "neetoui";
import { Header } from "neetoui/layouts";
import FilterPane from "./FilterPane";
import Subscribe from "./Subscribe";

function TopBar() {
  const [showPane, setShowPane] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const handleClick = () => {
    setShowPane(true);
  };
  const handleSub = () => {
    setShowSub(true);
  };
  return (
    <div>
      <div className="border-b px-6">
        <Header
          title={
            <Typography className="text-2xl font-semibold text-gray-500">
              Feed.ly
            </Typography>
          }
          actionBlock={
            <div className="space-x-3">
              <div className="inline-block align-middle">
                <div className="flex">
                  <Tooltip placement={"bottom"} content={"Search"}>
                    <Button icon={() => <Search />} style="text" />
                  </Tooltip>
                  <Tooltip placement={"bottom"} content={"Subscribe"}>
                    <Button
                      icon={() => <Notification />}
                      style="text"
                      onClick={handleSub}
                    />
                  </Tooltip>
                </div>
              </div>
              <Button
                label="Filter"
                icon={Filter}
                style="secondary"
                onClick={handleClick}
              />
            </div>
          }
        />
      </div>
      <FilterPane showPane={showPane} setShowPane={setShowPane} />
      <Subscribe showSub={showSub} setShowSub={setShowSub} />
    </div>
  );
}

export default TopBar;
