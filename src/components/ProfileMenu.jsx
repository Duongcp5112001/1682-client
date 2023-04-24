import React, { useState, useEffect } from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";

const ProfileMenu = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const token = Cookies.get("token");
  
  const [dataMember, setDataMember] = useState({});

  const getDataMember = async () => {
    try {
      const response = await Axios.get(
        "https://mystic-network.herokuapp.com/api/member/get-profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
          setDataMember(response.data.member);
        
    } catch (error) {
      message.error(error);
    }
  };

  useEffect(() => {
    getDataMember();
  }, []);

  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      try {
        Axios.post(
          "https://mystic-network.herokuapp.com/api/logout",
        );
      } catch (error) {
        message.error(error);
      }
      Cookies.remove('token');
      navigate('/login');
    }
    if (e.key === "profile") {
      navigate(`/profile/${dataMember._id}`);
    }
  };

  const menu = (
    <>
      <Menu onClick={handleMenuClick}>
        <>
          <Menu.Item key="profile" icon={<Avatar src={dataMember.avatar}></Avatar>}>
          {dataMember.username}
          </Menu.Item>
          <Menu.Item key="logout">Log Out</Menu.Item>
        </>
      </Menu>
    </>
  );

    return (
      <>
        <Dropdown
          overlay={menu}
          trigger={"click"}
          visible={visible}
          onOpenChange={setVisible}
          ><div>
            <Avatar src={dataMember.avatar || ""}></Avatar>
          </div>
        </Dropdown>
      </>
      
  );
};

export default ProfileMenu;
