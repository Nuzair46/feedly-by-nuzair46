import React, { useState } from "react";

import { Pane, Typography, Button, Checkbox } from "neetoui";
import { CATEGORY, FILTER } from "./constants";

import { Check } from "@bigbinary/neeto-icons";

function FilterPane({ showPane, setShowPane, filter, setFilter }) {
  const [tempFilter, setTempFilter] = useState(filter);

  return (
    <div className="w-full">
      <Pane
        isOpen={showPane}
        onClose={() => {
          setShowPane(false);
          setFilter(FILTER);
          setTempFilter(FILTER);
        }}
      >
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
        </Pane.Header>
        <Pane.Body className="space-y-5 space-x-5">
          <Typography className="font-semibold text-gray-700">
            Category
          </Typography>
          {CATEGORY.map((item, index) => {
            return (
              <div key={index}>
                <Checkbox
                  id={item}
                  label={item}
                  checked={tempFilter[item.toLowerCase()]}
                  onChange={() => {
                    setTempFilter({
                      ...tempFilter,
                      [item.toLowerCase()]: !tempFilter[item.toLowerCase()],
                    });
                  }}
                />
              </div>
            );
          })}
          <div className="flex border-t w-11/12">
            <Checkbox
              id="archived"
              label="Include archived articles"
              className="my-5"
            />
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            size="large"
            label="Save Changes"
            icon={Check}
            onClick={() => {
              setShowPane(false);
              setFilter(tempFilter);
            }}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => {
              setShowPane(false);
              setFilter(FILTER);
              setTempFilter(FILTER);
            }}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
}

export default FilterPane;
