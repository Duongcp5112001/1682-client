import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import Spinner from "react-spinner";
import React, { useState, useEffect } from "react";

import { LoadingOutlined } from '@ant-design/icons';

const Login = () => {
const { login } = useContext(AuthContext);
const [username, setUsername] = useState("");
const [showLoginForm, setShowLoginForm] = useState(false);
const Navigate = useNavigate();

const handleLogin = () => {
login();
};

const handleShowLoginForm = () => {
    setShowLoginForm(true);
};

const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    setShowLoginForm(false);
    if (username !== "") {
        Navigate.push("/");
    }
};

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    
    setTimeout(() => {
    setIsLoading(false);
    }, 500);
}, []);





return (
<div className="login">
    {isLoading ? (
        <div className="spinner-container">
            <LoadingOutlined style={{color: 'lightgray', fontSize:'50px'}} />
        </div>
        
    ) : (
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
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin} spinning={isLoading}>Login</button>
            
            <Link to="/resetpasword" style={{ textDecoration: "none" , color:"grey" }}>
                <p>Don't remember your password?</p>
            </Link>
            <hr/>
            <p onClick={handleShowLoginForm}>Or Login without account.</p>
            {showLoginForm && (
                <div>
                <form onSubmit={handleLoginFormSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
                <button type="submit">Continue</button>
                </form>
            </div>
            )}
            </form>
        </div>
    </div>
    )}
    
</div>
);
};

export default Login;