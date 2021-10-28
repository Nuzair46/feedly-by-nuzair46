import React from "react";

import NewsPane from "./NewsPane";

function Dashboard({ news }) {
  return (
    <div>
      <NewsPane news={news} />
    </div>
  );
}

export default Dashboard;
