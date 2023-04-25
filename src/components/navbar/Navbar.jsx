import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import Weather from "../weather/Weather";
import Clock from "../clock/Clock";
import DropdownMenu from "../ProfileMenu";
import { MessageOutlined } from "@ant-design/icons";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img src="./logo_transparent.png" className="NavLogo" alt="" />
          <span>Mystic</span>
        </Link>

        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <div className="weather">
          <div className="weather-top">
            <Weather />
          </div>
          <div className="time-bottom">
            <Clock />
          </div>
        </div>

        <Link
          to="/message"
          style={{
            textDecoration: "none",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <MessageOutlined style={{ fontSize: "23px", cursor: "pointer", color:"black" }} />
        </Link>
        <NotificationsOutlinedIcon style={{ fontSize: "30px" }} />
        <div className="user">
          <DropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
