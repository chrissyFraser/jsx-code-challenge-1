import React from "react";
import ReactDom from "react-dom";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import ImageList from "./components/List";

ReactDom.render(
  <div>
    <Heading />
    <ImageList />
    <Footer />
  </div>,
  document.getElementById("root")
);
