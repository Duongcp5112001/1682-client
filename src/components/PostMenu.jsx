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

    const logoutEvent = async (e) => {
        await Axios.post( 
            'https://mystic-network.herokuapp.com/api/logout'
        ).then((response) => {
            Cookies.remove('token')
            navigate('/login')
        })
    }

    const handleMenuClick = (e) =>{
        if(e.key === 'logout'){
            logoutEvent();
        }
        if(e.key === 'profile'){
            if (dataMember !== []) {
                window.location.href = `/profile/${dataMember._id}`;
            }
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
        menu={menu}
        trigger={['click']}
        open={visible}
        onOpenChange={setVisible}>
            <Avatar icon={<MoreOutlined style={{ background:'none', color:'black'}}/>} style={{ backgroundColor: '#fff', color: '#000' }} />
        </Dropdown>
    );
};

export default PostMenu;