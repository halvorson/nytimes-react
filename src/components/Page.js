import React from "react";
import Header from "./Header";
import SearchContainer from "./SearchContainer";

const Page = () =>
  <div>
    <Header />
    <div className="container">
      <SearchContainer />
    </div>
  </div>;

export default Page;
