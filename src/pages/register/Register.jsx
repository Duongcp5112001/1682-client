
import { Link, useNavigate  } from "react-router-dom";
import "./register.scss";
import React, { useState, useEffect } from "react";

import { LoadingOutlined } from '@ant-design/icons';
import Axios from "axios";
import { message } from 'antd'

const Register = () => {
  const [userName, setUsername] = useState('');
  const [passWord, setPassword] = useState('');
  const [reEnterPassword, setreenterPassword] = useState('');
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    setIsLoading(false);
    }, 500);
  }, []);

  const onChangeUsername = (event) => {
    const data = event.target.value
    setUsername(data)
  };

  const onChangePassword = (event) => {
    const data = event.target.value
    setPassword(data)
  };

  const onChangeReenterPassword = (event) => {
    const data = event.target.value
    setreenterPassword(data)
  };

  const onRegisterButton = async (event) => {
    try { 
      const formData = {
        username: userName,
        password: passWord,
        reenterPassword: reEnterPassword
      };
      await Axios.post( 
        'https://mystic-network.herokuapp.com/api/register', 
        formData
      ).then((response) => {
        if (response.data.access_token) {
          navigate('/login')
        }
      });  
    } catch (error) {
      message.error(error)
    }
  };

  return (
    <div className="register">
      {isLoading ? (
        <div className="spinner-container">
            <LoadingOutlined style={{color: 'lightgray', fontSize:'50px'}} />
        </div>
      ) : (
        <div className="card">
          <div className="left">
            <h1></h1>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
          </div>
          <div className="right">
            <h1>Sign up</h1>
            <form>
              <input 
                type="text" 
                placeholder="Username" 
                onChange={onChangeUsername}
                />
              <input 
                type="password" 
                placeholder="Password" 
                onChange={onChangePassword}
                />
              <input
                type="password" 
                placeholder="Re-enter password" 
                onChange={onChangeReenterPassword}
                />
              <button type="button" onClick={onRegisterButton}>Register</button>
            </form>
          </div>
        </div>
      )};
      
    </div>
  )
};

export default Register;