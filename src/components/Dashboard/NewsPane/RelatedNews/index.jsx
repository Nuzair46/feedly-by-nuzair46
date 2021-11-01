import React from "react";
import SmallCard from "./SmallCard";

function RelatedNews({ news }) {
  let smallCardData = [...news.data];
  smallCardData.shift();
  return (
    <div className="flex space-x-4">
      <div className="space-y-6 w-1/2 border-b pb-6">
        {smallCardData.slice(1, 3).map((item, index) => {
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
      <div className="space-y-6 w-1/2 border-b pb-6">
        {smallCardData.slice(3, 5).map((item, index) => {
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
    </div>
  );
}

export default RelatedNews;
