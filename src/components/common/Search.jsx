import React, { useCallback, useEffect, useState } from "react";

import { Modal, Input } from "neetoui";

import { Search } from "@bigbinary/neeto-icons";

function SearchBar({ showSearch, setShowSearch, filter, news }) {
  const [searchResultArray, setSearchResultArray] = useState([]);
  //const [filteredNews, setFilteredNews] = useState([]);

  let filtered = [];
  useEffect(() => {
    news.map(item => {
      if (filter[item.category]) {
        filtered.push(item);
      }
    });
    //setFilteredNews(filtered);
    console.log(filtered);
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
    let tempArray = [];
    filtered.map(item => {
      item.data.map(element => {
        if (
          element.title.toLowerCase().includes(value.toLowerCase()) &&
          value.length > 2
        ) {
          console.log(item.category);
          console.log(element.title, value);
          tempArray.push(element);
          setSearchResultArray(tempArray);
        }
      });
    });
  };

  useEffect(() => {
    //console.log(searchResultArray);
  }, [searchResultArray]);

  const optimizedSearch = useCallback(debounce(handleSearch), []);

  return (
    <div className="w-full">
      <Modal
        isOpen={showSearch}
        onClose={() => {
          setShowSearch(false);
        }}
        closeButton={false}
      >
        <Input
          prefix={<Search size={16} />}
          placeholder="Search"
          onChange={e => optimizedSearch(e.target.value)}
        />
      </Modal>
    </div>
  );
}

export default SearchBar;
