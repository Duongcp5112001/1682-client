import React, {useState} from "react";
import { Avatar,Dropdown, Menu } from "antd";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

const ProfileMenu =() =>{
    
    const [visible, setVisible] = useState(false);
    const { currentUser } = useContext(AuthContext);
    

    const handleMenuClick = (e) =>{
        if(e.key === 'logout'){
            window.location.replace('/login');
        }
        if(e.key === 'profile'){
            window.location.href = `/profile/${currentUser.id}`;
        }
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="profile" icon={<Avatar src={currentUser.profilePic}/>}>{currentUser.name}</Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="edit">Edit Profile</Menu.Item>
            <Menu.Item key="setting">Setting</Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="logout">Log Out</Menu.Item>
        </Menu>
    );
    return(
        <Dropdown 
        overlay={menu}
        trigger={['click']}
        visible={visible}
        onVisibleChange={setVisible}>
            
            <Avatar src={currentUser.profilePic}/>
            
            
        </Dropdown>
    );
};

export default ProfileMenu;