import React from "react";
import Outline from "./components/Outline/Outline";
import List from "./components/List/List";
import AddBook from "./components/AddBook/AddBook";

const Content = () => {
  return (
    <Outline>
      <AddBook />
      <List />
    </Outline>
  );
};

export default Content;
