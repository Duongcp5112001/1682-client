import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';


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
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
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
</div>
);
};

export default Login;