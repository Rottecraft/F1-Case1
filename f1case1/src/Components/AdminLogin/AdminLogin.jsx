import styles from "./AdminLogin.module.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function AdminLogin() {
 
  const [username, setUsername] = useState(""); //empty text
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null); //nothing happened yet 
  const [redirect, setRedirect] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
   
    if (username === "admin" && password === "admin") {
        setLoginStatus("success");
        setTimeout(() => {
      setRedirect(true);
    }, 2000);
    
    } 
    else {
      setLoginStatus("error");
      setTimeout(() => {
      setLoginStatus(null);
    }, 2000);
    }
    
  };
   if (redirect) { 
      return ( <Navigate to="/" />);
    }

  return (
    <div className={styles.Container}>
      <form className={styles.AdminLoginPopup} onSubmit={handleLogin}>
        <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} className="usernameInput" type="text"placeholder="Enter username"/>
        <label>Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className="passwordInput" type="password" placeholder="Enter password"/>
        <button className="loginBtn" type="submit">Login</button>
        <msg className="successful-login-message" style={{ display: loginStatus === "success" ? "block" : "none" }}>Login successful</msg>
        <msg className="unsuccessful-login-message"style={{ display: loginStatus === "error" ? "block" : "none" }}>Incorrect login or password</msg>
      </form>
      
      </div>
  );
}
