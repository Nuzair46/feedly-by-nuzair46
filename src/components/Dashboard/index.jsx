import React, { useEffect, useState } from "react";

import NewsPane from "./NewsPane";
import { ReactComponent as Empty } from "../../assets/Empty.svg";
import { NeetoForm } from "@bigbinary/neeto-icons";

import { Typography, Button } from "neetoui";
import EmptyModal from "./EmptyModal";
import RelatedNews from "./NewsPane/RelatedNews";
import FilterBadges from "../common/FilterBadges";

function Dashboard({
  news,
  filter,
  setFilter,
  setSearchNews,
  archived,
  setArchived,
}) {
  const [filteredNews, setFilteredNews] = useState([]);
  const [showModal, setShowModal] = useState(false);

  let filtered = [];
  useEffect(() => {
    news.map(item => {
      if (filter[item.category]) {
        filtered.push(item);
      }
    });
    setFilteredNews(filtered);
    setSearchNews(filtered);
  }, [filter, news]);

  if (filteredNews.length === 0) {
    return (
      <div>
        <div className="table absolute top-0 left-0 h-full w-full">
          <div className="table-cell align-middle">
            <div className="space-y-6 text-center w-1/6 mx-auto">
              <Empty className="m-auto" />
              <Typography
                style="h3"
                className="text-center font-semibold to-gray-800"
              >
                No News Articles Found
              </Typography>
              <Button
                icon={NeetoForm}
                iconPosition="left"
                label="Write to us"
                style="secondary"
                onClick={() => setShowModal(true)}
              />
            </div>
            <EmptyModal showModal={showModal} setShowModal={setShowModal} />
            <div className="flex flex-wrap mx-40 mt-10 pt-8 border-t">
              <RelatedNews news={news[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-40 my-5">
        <FilterBadges
          filter={filter}
          setFilter={setFilter}
          archived={archived}
          setArchived={setArchived}
        />
      </div>
      {filteredNews.map((item, index) => {
        return <NewsPane key={index} news={item} archived={archived} />;
      })}
    </div>
  );
}

export default Dashboard;
