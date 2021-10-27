import React, { useState } from "react";

import { Pane, Typography, Button, Checkbox } from "neetoui";
import { CATEGORY } from "./constants";

import { Check } from "@bigbinary/neeto-icons";

function FilterPane({ showPane, setShowPane }) {
  const [all, setAll] = useState(true);
  const filterStates = {};
  CATEGORY.map(item => {
    filterStates[item] = false;
  });
  const [oneCheck, setOneCheck] = useState(filterStates);
  return (
    <div className="w-full">
      <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
        </Pane.Header>
        <Pane.Body className="space-y-5 space-x-5">
          <Typography className="font-semibold text-gray-700">
            Category
          </Typography>
          <div>
            <Checkbox
              id="All"
              label="All"
              checked={all}
              onClick={() => {
                setAll(true);
                setOneCheck(filterStates);
              }}
            />
          </div>
          {CATEGORY.map((item, index) => {
            return (
              <div key={index}>
                <Checkbox
                  id={item}
                  label={item}
                  checked={oneCheck[item]}
                  onChange={() => {
                    setAll(false);
                    const newObj = oneCheck;
                    newObj[item] = !oneCheck[item];
                    console.log(oneCheck);
                    setOneCheck(newObj);
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
            onClick={() => setShowPane(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowPane(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
}

export default FilterPane;
