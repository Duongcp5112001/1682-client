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
import Share from "../../components/share/Share"

const Profile = () => {
  const token = Cookies.get('token');
  const decodedToken = decodeToken(token);
  const [dataMember, setDataMember] = useState({});
  const [checkProfile, setCheckProfile] = useState(true);
  const [paramId, setParamId] = useState("")
  const [memberId, setMemberId] = useState("")

  const url = new URL(window.location.href);

  const getDataMember = async () => {
    try {
      const memberId = url.pathname.split('/')[2];
      setMemberId(memberId);
      setParamId(memberId);
      await Axios.get(
        `https://mystery-social-7f4a4cc480b5.herokuapp.com/api/profile/${memberId}`
      )
        .then((response) => {
          setDataMember(response.data.member);
        }) 
    } catch (error) {
      message.error(error);
    }
  };

  

  useEffect(() => {
    if (String(decodedToken.id) === memberId) {
      setCheckProfile(false)
    }
    getDataMember();
  }, [memberId]);

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
      <Share dataMember={dataMember}/>
      <Posts dataMember={dataMember} namePage={"profile"} paramId={paramId}/>
      </div>
    </div>
  );
};

export default Profile;