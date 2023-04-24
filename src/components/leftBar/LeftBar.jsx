import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Ads from "../../assets/ads.png";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";

const LeftBar = () => {
  const token = Cookies.get('token');

  const [dataMember, setDataMember] = useState({});

  const getDataMember = async () => {
    try {
      await Axios.get(
        "https://mystic-network.herokuapp.com/api/member/get-profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => {
          setDataMember(response.data.member);
        })
    } catch (error) {
      message.error(error);
    }
  };

  useEffect(() => {
    getDataMember();
  }, []);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <Link
              to={`/profile/${dataMember._id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img src={dataMember.avatar} alt="" />
              <span>{dataMember.username}</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/friend" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"}}>
              <img src={Friends} alt="" />
              <span>Friends</span>
            </Link>
            
          </div>
          <div className="item">
            <Link to="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"}}>
              <img src={Groups} alt="" />
              <span>Groups</span>
            </Link>
            
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
