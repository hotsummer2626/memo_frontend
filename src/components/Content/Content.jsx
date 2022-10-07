import React from "react";
import Outline from "./components/Outline/Outline";
import List from "./components/List/List";
import AddBook from "./components/AddBook/AddBook";
import SearchBook from "./components/SearchBook/SearchBook";

const Content = () => {
  return (
    <Outline>
      <AddBook />
      <SearchBook />
      <List />
    </Outline>
  );
};

export default Content;
