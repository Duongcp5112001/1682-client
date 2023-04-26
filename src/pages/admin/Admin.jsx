import React, { useContext } from "react";
import AdminLeft from "../../components/adminLeftBar/AdminLeft";
import AdminMavBar from "../../components/adminNavBar/AdminNavbar";
import Cookies from "js-cookie";
import { BrowserRouter, createBrowserRouter, Navigate, Outlet, RouterProvider, Route, Routes } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import Dashboard from "./dashboard/Dashboard";
import ManageUser from "./manageuser/ManageUser";
import ManagePost from "./managepost/ManagePost";
import ManageFb from "./managefeedback/ManageFb";
import ManageAds from "./manageads/ManageAds";

const AdminPage = () => {
    return(
        <div> Admin</div>
    )       
};

export default AdminPage;
