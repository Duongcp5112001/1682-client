import React, {useState, useEffect} from "react";
import { Avatar,Dropdown, Menu } from "antd";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from 'antd'

const PostMenu =() =>{
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    
    const token = Cookies.get("token");

    const logoutEvent = async (e) => {
        await Axios.post( 
            'https://mystery-social-7f4a4cc480b5.herokuapp.com/api/logout'
        ).then((response) => {
            Cookies.remove('token')
            navigate('/login')
        })
    }

    const handleMenuClick = (e) =>{
        if(e.key === 'edit'){
            //function edit post cua nguoi dung
        }
        if(e.key === 'delete'){
           //function delete post cua nguoi dung
        }
    };

    const menu = (
        <>
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="edit">Edit</Menu.Item>
                <Menu.Item key="delete">Delete</Menu.Item>
            </Menu>
        </>
        
    );
    return(
        <>
            <Dropdown 
                overlay={menu}
                trigger={['click']}
                visible={visible}
                onOpenChange={setVisible}
            >
                <Avatar icon={<MoreOutlined style={{ background:'none', color:'black'}}/>} style={{ backgroundColor: '#fff', color: '#000' }} />
            </Dropdown>
        </>
    );
};

export default PostMenu;