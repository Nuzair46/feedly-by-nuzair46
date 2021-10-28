import React from "react";

import { Typography, Tag } from "neetoui";
import { FILTER } from "./constants";

function FilterBadges({ filter, setFilter }) {
  let tempFilter = {};
  return (
    <div className="space-x-4 flex">
      {JSON.stringify(filter) != JSON.stringify(FILTER)
        ? Object.keys(filter).map((key, index) => {
            if (filter[key]) {
              return (
                <Tag
                  key={index}
                  label={
                    <Typography className="text-xs" textTransform="capitalize">
                      {key}
                    </Typography>
                  }
                  onClose={() => {
                    tempFilter = { ...filter };
                    tempFilter[key] = false;
                    setFilter(tempFilter);
                  }}
                />
              );
            }

            return null;
          })
        : null}
    </div>
  );
}

export default FilterBadges;