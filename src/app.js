// const Heading2 = ()=> (
//   <h1 className="heading "> with parenthisis </h1>
// )

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

const APPLayOut = () => {
  console.log(<Body></Body>);

  return (
    <div className="app">
      <Header />
      {/** We will give some conditon if my path is slash we should render nody if / about we should have avout  if path is /conatct we should prvide contact we use outlet component*/}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  // arraysof objects
  {
    path: "/",
    element: <APPLayOut />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
