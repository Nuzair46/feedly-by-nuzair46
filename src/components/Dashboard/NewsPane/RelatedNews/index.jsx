import React from "react";
import SmallCard from "./SmallCard";

function RelatedNews({ news }) {
  let smallCardData = news.data;
  smallCardData.shift();
  return (
    <div className="flex flex-wrap border-b pb-6">
      {smallCardData.slice(1, 5).map((item, index) => {
        return (
          <SmallCard
            key={index}
            id={index}
            data={item}
            category={news.category}
          />
        );
      })}
    </div>
  );
}

export default RelatedNews;
