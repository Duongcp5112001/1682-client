import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { createContext, useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import Group from "./pages/group/Group";
import Friends from "./pages/friend/Friends";
import EditProf from "./pages/editProfile/EditProfile";
import Cookies from "js-cookie";
import Message from "./pages/message/Message";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    const location = useLocation();
    const [style, setStyle] = useState({});
    useEffect(() => {
      const dashboard = document.getElementById("dashboard");

      if (dashboard) {
        setStyle(() => ({ display: "none" }));
      } else {
        setStyle(() => ({}));
      }
    }, [location.pathname]);
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar style={style} />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    const token = Cookies.get("token");
    if (!token) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:_id",
          element: <Profile />,
        },
        {
          path: "/message",
          element: <Message />,
        },
        {
          path: "/friend",
          element: <Friends />,
        },
        {
          path: "/editPro/:id",
          element: <EditProf />,
        },
        {
          path: "/group/:id",
          element: <Group />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
