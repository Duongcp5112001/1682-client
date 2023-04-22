import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Ads from "../../assets/ads.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <Link to="/profile/:1" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
            </Link>
            
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Adsversment</span>
          <div className="item">
            <img src={Ads} alt="" />
            <span>Ads </span>
          </div>
          <div className="item">
            <img src={Ads} alt="" />
            <span>Ads</span>
          </div>
          <div className="item">
            <img src={Ads} alt="" />
            <span>Ads</span>
          </div>
          <div className="item">
            <img src={Ads} alt="" />
            <span>Ads</span>
          </div>
          <div className="item">
            <img src={Ads} alt="" />
            <span>Ads</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;