import { Link } from "react-router-dom";
import "./register.scss";
import React, { useState, useEffect } from "react";

import { LoadingOutlined } from '@ant-design/icons';

const Register = () => {
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    
    setTimeout(() => {
    setIsLoading(false);
    }, 500);
}, []);


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
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="passwor" placeholder="Re-enter Password" />
          <button>Register</button>
        </form>
      </div>
      
      </div>
    )}
    </div>
  );
};

export default Register;