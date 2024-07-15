// const Heading2 = ()=> (
//   <h1 className="heading "> with parenthisis </h1>
// )

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";

import Body from "./Components/Body";

const APPLayOut = () => {
  console.log(<Body></Body>);

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<APPLayOut />);
