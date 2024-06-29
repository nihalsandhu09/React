const parent = React.createElement(
    "div",
    { id: "parent" },
    [
      React.createElement("div", { id: "child" }, [
          React.createElement("h1", {}, "i am an h1 tag"),
          React.createElement("h1", {}, "i am an h1 tag"),
        ]),
        
        React.createElement("div", { id: "child2" }, [
          React.createElement("h1", {}, "i am an h1 tag"),
          React.createElement("h1", {}, "i am an h1 tag"),
        ]),
    ]
  
  
  
  );
  console.log(parent);
  // ReactElement(OBJECT) => and then it become html that browser understand while ts rendering on to dom
  // const heading = React.createElement("h1" , {id : "heading",} , "Hello World from React");
  
  // console.log(heading) // object react element are objects
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);
  