import React from "react";

import { Filter, Search, Notification } from "@bigbinary/neeto-icons";
import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

function TopBar() {
  return (
    <div className="border-b px-6">
      <Header
        title="Feed.ly"
        actionBlock={
          <div className="space-x-3">
            <div className="inline-block align-middle">
              <div className="flex space-x-2">
                <Search size={24} />
                <Notification size={24} />
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
