import React from "react";

import NewsPane from "./NewsPane";

function Dashboard({ news }) {
  return (
    <div>
      <NewsPane news={news["Science"]} />
    </div>
  );
}

export default Dashboard;
