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
        if(e.key === 'edit'){
            //function edit post cua nguoi dung
        }
        if(e.key === 'delete'){
           //function delete post cua nguoi dung
        }
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="edit">Edit</Menu.Item>
            <Menu.Item key="delete">Delete</Menu.Item>
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