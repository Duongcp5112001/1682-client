import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from 'antd'


const Login = () => {
    const [showLoginForm, setShowLoginForm] = useState('');
    const [userName, setUsername] = useState('');
    const [userName1, setUsername1] = useState('');
    const [passWord, setPassword] = useState('');
    const navigate = useNavigate();

    const onChangeUsername = (event) => {
        const data = event.target.value
        setUsername(data)
    };

    const onChangePassword = (event) => {
        const data = event.target.value
        setPassword(data)
    };

    const onChangeUsername1 = (event) => {
        const data = event.target.value
        setUsername1(data)
    };

    const handleShowLoginForm = () => {
        setShowLoginForm(true);
    };

    const onClickLogin = async (event) => {
        try {
            const formData = {
                username: userName,
                password: passWord
            };
            await Axios.post( 
                'https://mystic-network.herokuapp.com/api/login', 
                formData,
              ).then((response) => {
                if (response.data.access_token) {
                    Cookies.set('token', response.data.access_token)
                    if (Cookies.get('token')) {
                        if (response.data.member.role === 'ADMIN') {
                            navigate('/admin-page');
                        } else {
                            navigate('/');
                        }
                    }
                }
              });
        } catch (error) {
            message.error(error)
        }
    };

    const onClickLogin1 = async (event) => {
        setShowLoginForm(false);
        try {
            const formData = {
                username: userName1
            };
            await Axios.post( 
                'https://mystic-network.herokuapp.com/api/login-no-password', 
                formData
              ).then((response) => {
                if (response.data.access_token) {
                    Cookies.set('token', response.data.access_token)
                    if (Cookies.get('token')) {
                      navigate('/')
                    }
                }
              });
        } catch (error) {
            message.error(error)
        }
    };

return (
<div className="login">
    <div className="card">
    <div className="left">
        <h1></h1>
        <p>
        </p>
        <span>Don't you have an account?</span>
        <Link to="/register">
        <button>Register</button>
        </Link>
    </div>
    <div className="right">
        <h1>Login</h1>
        <form>
        <input
            type="text" 
            placeholder="Username" 
            onChange={onChangeUsername}/>
        <input 
            type="password" 
            placeholder="Password" 
            onChange={onChangePassword}/>
        <button
            type="button"
            onClick={onClickLogin}>Login</button>
        <Link to="/resetpasword" style={{ textDecoration: "none" , color:"grey" }}>
            <p>Don't remember your password?</p>
        </Link>
        <hr/>
        <p onClick={handleShowLoginForm}>Or Login without account.</p>
        {showLoginForm && (
            <div>
            <form>
            <input type="text" onChange={onChangeUsername1} placeholder="Username"/>
            <button onClick={onClickLogin1}>Continue</button>
            </form>
        </div>
        )}
        </form>
    </div>
    </div>
</div>
);
};

export default Login;