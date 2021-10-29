import React, { useCallback, useEffect, useState } from "react";

import { Input, Button } from "neetoui";

import { Search } from "@bigbinary/neeto-icons";

import SearchModal from "./SearchModal";

function SearchBar({ showSearch, setShowSearch, filter, news }) {
  const [searchResultArray, setSearchResultArray] = useState({});
  const [length, setLength] = useState(0);
  let filtered = [];
  useEffect(() => {
    news.map(item => {
      if (filter[item.category]) {
        filtered.push(item);
      }
    });
  }, [filter]);

  const debounce = func => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(this, args);
      }, 500);
    };
  };

  const handleSearch = value => {
    setLength(value.length);
    const search_result = {};
    filtered.map(item => {
      item.data.map(element => {
        if (
          element.title.toLowerCase().includes(value.toLowerCase()) &&
          value.length > 2
        ) {
          search_result[element.url] = [item.category, element.title];
        }
      });
    });
    setSearchResultArray(search_result);
  };

  let Results = () => {
    let ref = 9499944; //some random number
    let result = Object.keys(searchResultArray).map((item, index) => {
      ref = index;
      return (
        <Button
          key={index}
          style="text"
          label={`${searchResultArray[item][1]}`}
          to={`/article/${searchResultArray[item][0]}/${item.replace(
            "https://www.inshorts.com/en/news/",
            ""
          )}`}
          onClick={() => setShowSearch(false)}
        />
      );
    });

    if (ref === 9499944 && length > 2) {
      return <div>No results found</div>;
    }

    return result;
  };

  const optimizedSearch = useCallback(debounce(handleSearch), []);

  return (
    <div id="searchPortal">
      <SearchModal showSearch={showSearch} setShowSearch={setShowSearch}>
        <Input
          prefix={<Search size={16} />}
          placeholder="Search"
          onChange={e => optimizedSearch(e.target.value)}
        />
        <div>
          <Results />
        </div>
      </SearchModal>
    </div>
  );
}

export default SearchBar;
