import { LOGO_URL } from "../Utilis/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilis/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnName] = useState("Login");
  console.log("Header render");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  //  if dependency array is  present and its changes every time then useEffect will called after every render [btnNameReact] => callled everytime btnNameReact is update
  // useEffect(() => {
  //   console.log("useEffect Called");
  // }, [btnNameReact]);
  const onlineStatus = useOnlineStatus();

  return (
    <div className=" flex justify-between items-center shadow-lg mb-2 ">
      <div className="logo-container ml-4">
        <img className="w-20" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-5 items-center">
          <li className="text-lg">
            Online-Status :{onlineStatus ? "✅" : "🔴"}{" "}
          </li>
          <li className="text-lg">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="text-lg">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className="text-lg">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="text-lg">
            <Link className="link" to="/grocery">
              Grocery
            </Link>{" "}
          </li>
          <li className="text-lg">Cart</li>
          <button
            className=" border-transparent border-solid bg-slate-200 px-8 py-2 text-lg"
            onClick={() => {
              if (btnNameReact === "Login") {
                setBtnName("Logout");
              } else {
                setBtnName("Login");
              }
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
