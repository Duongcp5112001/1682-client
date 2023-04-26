import React from "react";
import Clock from "../clock/Clock";
import Weather from "../weather/Weather";
import "./adminnavbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import DropdownMenu from "../ProfileMenu"

const AdminNavbar = () => {
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
    <NotificationsOutlinedIcon style={{ fontSize: "30px" }} />
    <DropdownMenu/>
    </div>
</div>
);
};

export default AdminNavbar;
