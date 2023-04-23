import React, { useState, useEffect } from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";

const ProfileMenu = () => {
  const [visible, setVisible] = useState(false);

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

  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      window.location.replace("/login");
    }
    if (e.key === "profile") {
      window.location.href = `/profile/${dataMember._id}`;
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<Avatar src={dataMember.avatar}></Avatar>}>
        {dataMember.username}
      </Menu.Item>
      <Menu.Item key="edit">Edit Profile</Menu.Item>
      <Menu.Item key="setting">Setting</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );

    return (
    <Dropdown
      menu={menu}
      trigger={"click"}
      open={visible}
      onOpenChange={setVisible}
    >
      <Avatar src={dataMember.avatar || ""}></Avatar>
    </Dropdown>
  );
};

export default ProfileMenu;
