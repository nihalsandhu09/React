import { LOGO_URL } from "../Utilis/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnName] = useState("Login");
  console.log("Header render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
