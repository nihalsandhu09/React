// // React.createElement  ==> Object ==> HTMLElement(render) when we render it thne fit becomes html element

// const heading = React.createElement("h1", { id: "heading" }, "Namste React "); // this is how you create React lement using core react
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // JSX JSX is Not PArt of REact
// // JSX is not HTML  in Js its just look like HTMl XML its more like XML syntax
// // JSX (Transpiled before it reaches the js engine )
// const jsxHeading = <h1 id="heading"> Namaste React using JSX </h1>; // this is how you create using JSX

// console.log(jsxHeading);
// root.render(jsxHeading);
// const Heading2 = ()=> (
//   <h1 className="heading "> with parenthisis </h1>
// )

// import React from "react";
// import ReactDOM from "react-dom/client";

// const Title = () => (
//   <h1 id="heading" className="heading">
//     {" "}
//     Namaste React using JSX{" "}
//   </h1>
// ); // this is how you create using JSX
// console.log(Title);
// const HeadingComponent = () => (
//   <div id="container">
//     {Title()}
//     <Title></Title>
//     <Title/>
//     <h1 className="functional"> Namssate React functional component </h1>
//   </div>
// );

// // console.log(Heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);
