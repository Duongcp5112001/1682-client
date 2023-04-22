import React, {useState} from "react";
import { Avatar,Dropdown, Menu } from "antd";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { MoreOutlined } from '@ant-design/icons';


const PostMenu =() =>{
    
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
            <Menu.Item key="edit">Edit</Menu.Item>
            <Menu.Item key="setting">Delete</Menu.Item>
        </Menu>
    );
    return(
        <Dropdown 
        overlay={menu}
        trigger={['click']}
        visible={visible}
        onVisibleChange={setVisible}>
            <Avatar icon={<MoreOutlined style={{ background:'none', color:'black'}}/>} style={{ backgroundColor: '#fff', color: '#000' }} />
            
            
        </Dropdown>
    );
};

export default PostMenu;