import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Group from "./pages/group/Group";
import Friends from "./pages/friend/Friends";
import EditProf from "./pages/editProfile/EditProfile";
import Cookies from "js-cookie"
import Axios from "axios";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const token = Cookies.get('token');
  const [dataMember, setDataMember] = useState({});

  const getDataMember = async () => {
    await Axios.get(
      "https://mystic-network.herokuapp.com/api/member/get-profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      setDataMember(response.data.member)
    })
  };

  useEffect(() => {
    getDataMember();
  }, []);

  const Layout = (props) => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar dataMember={props.dataMember}/>
        <div style={{ display: "flex" }}>
          <LeftBar dataMember={props.dataMember}/>
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    const token = Cookies.get('token')
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
          <Layout dataMember={dataMember}/>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home dataMember={dataMember} />,
        },
        {
          path: "/profile/:_id",
          element: <Profile />,
        },
        {
          path: "/group",
          element: <Group />, 
        },
        {
          path: "/friend",
          element: <Friends />, 
        },
        {
          path: "/editPro/:id",
          element: <EditProf />, 
        }
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