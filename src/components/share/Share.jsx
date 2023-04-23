import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";

const Share = () => {
  const token = Cookies.get("token");
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
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={dataMember.avatar}
            alt=""
          />
          <input type="text" placeholder={`How your feel today?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Photo</span>
              </div>
            </label>
          </div>
          <div className="right">
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;