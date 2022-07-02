import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="container">
            <h1 id="signup-header">Signup</h1>
            <form>
                <label className="signup-name-label" htmlFor="name">Name:</label>
                <input type="text" />
                <label className="signup-email-label" htmlFor="">Email:</label>
                <input type="text" />
                <label className="signup-password-label" htmlFor="">Password:</label>
                <input type="password" />
                <button id="signup-button">Signup</button>
            </form>
            <Link to="/">
            <button id="backtologin">&larr; Back to Login</button>
            </Link>
        </div>
    )
  };
  
  export default Signup;