import "./group.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";
import Share from "../../components/share/Share"

const Group = () => {
  const token = Cookies.get('token');

  const [dataMember, setDataMember] = useState({});

  const getDataMember = async () => {
    try {
      await Axios.get(
        "https://mystery-social-7f4a4cc480b5.herokuapp.com/api/member/get-profile",
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
            <button>Add Friend</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon /> 
          </div>
        </div>
      <Share/>
      <Posts/>
      </div>
    </div>
  );
};

export default Group;