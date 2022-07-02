import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="container">
            <h1 id="login-header">Welcome!</h1>
            <div className="form-section">
            <form>
                <label className="email-label" htmlFor="email">Email:</label>
                <input id="email" type="text" onChange={(e)=>setEmail(e.target.value)}/>
                
                <label className="password-label" htmlFor="password">Password:</label>
                <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
               
                <button id="login-button">Login</button>
            </form>
            <span>Don't have an account yet?</span>
            <Link to="/signup">
                <button id="gotosignup">Signup</button>
            </Link>
            </div>
        </div>
    )
  };
  
  export default Login;