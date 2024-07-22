import { LOGO_URL } from "../Utilis/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnNameReact, setBtnName] = useState("Login");
  console.log("Header render");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  //  if dependency array is  present and its changes every time then useEffect will called after every render [btnNameReact] => callled everytime btnNameReact is update
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>s<li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
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
