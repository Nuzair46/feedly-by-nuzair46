import React, { useState } from "react";

import { Filter, Search, Notification } from "@bigbinary/neeto-icons";
import { Button, Tooltip } from "neetoui";
import { Header } from "neetoui/layouts";
import FilterPane from "./FilterPane";
import Subscribe from "./Subscribe";
import SearchBar from "./Search";

function TopBar({ filter, setFilter, news, archived, setArchived }) {
  const [showPane, setShowPane] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowPane(true);
  };
  const handleSub = () => {
    setShowSub(true);
  };
  const handleSearch = () => {
    setShowSearch(true);
  };
  return (
    <div>
      <div className="border-b px-6 relative z-10">
        <Header
          title={
            <Button
              className="text-2xl font-semibold text-gray-500"
              onClick={() => (window.location.href = "/")}
              label="Feed.ly"
              style="text"
            />
          }
          actionBlock={
            <div className="space-x-3">
              <div className="inline-block align-middle">
                <div className="flex">
                  <Tooltip placement={"bottom"} content={"Search"}>
                    <Button
                      icon={() => <Search />}
                      style="text"
                      onClick={handleSearch}
                    />
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
      <FilterPane
        showPane={showPane}
        setShowPane={setShowPane}
        filter={filter}
        setFilter={setFilter}
        archived={archived}
        setArchived={setArchived}
      />
      <Subscribe showSub={showSub} setShowSub={setShowSub} />
      <SearchBar
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        filter={filter}
        news={news}
      />
    </div>
  );
}

export default TopBar;
