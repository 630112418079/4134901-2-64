import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Car from "./components/Car";
import List from "./components/List";
import Ui from  "./components/Ui";
import DataTable from "./components/Table";
import Hook from "./components/Hook";

ReactDOM.render(
  <>
    <Car age="25" eye="black" />
    <Ui/>
    <List /><br></br>
    <Hook/>
  </>,
  document.getElementById("root")
);

