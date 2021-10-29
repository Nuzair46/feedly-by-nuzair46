import React, { useCallback, useEffect, useState } from "react";

import { Input, Button } from "neetoui";

import { Search } from "@bigbinary/neeto-icons";

import SearchModal from "./SearchModal";

function SearchBar({ showSearch, setShowSearch, filter, news }) {
  const [searchResultArray, setSearchResultArray] = useState({});

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
    return Object.keys(searchResultArray).map((item, index) => {
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
  };

  useEffect(() => {
    //console.log(searchResultArray);
  }, [searchResultArray]);

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
