import "./profile.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";
import { decodeToken } from "react-jwt";

const Profile = () => {
  const token = Cookies.get('token');
  const decodedToken = decodeToken(token);
  const [dataMember, setDataMember] = useState({});
  const [checkProfile, setCheckProfile] = useState(true);

  const { memberId } = useParams();

  const getDataMember = async () => {
    try {
      const url = new URL(window.location.href);
      const memberId = url.pathname.split('/')[2];

      await Axios.get(
        `https://mystic-network.herokuapp.com/api/profile/${memberId}`
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
    if (String(decodedToken.id) === dataMember._id) {
      setCheckProfile(false)
    }
  }, []);

  return (
    <div className="profile">
      <div className="images">
        <img
          src={dataMember.coverImage}
          alt=""
          className="cover"
        />
        <img
          src={dataMember.avatar}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">          
          </div>
          <div className="center">
            <span>{dataMember.username}</span>
            <div className="info">
            </div>
            {checkProfile ? (
              <button>Add Friend</button>
            ) : (
              <div></div>
            )}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon /> 
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;