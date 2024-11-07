import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  const [userLogin, setUserLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className=" h-28 flex justify-between items-center shadow-md shadow-zinc-300">
      <div className="logo-container ">
        <img
          className="w-32 h-28"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul className="flex justify-center items-center gap-4 mx-4 ">
          <li>online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About Us</Link>{" "}
          </li>
          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="border px-4 bg-sky-100 rounded-md"
            onClick={() => {
              userLogin === "Login"
                ? setUserLogin("Logout")
                : setUserLogin("Login");
            }}
          >
            {userLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
