import styles from "./AdminLogin.module.css"
import { checkLogin } from "./LoginCheck"
import { useState } from "react"


export default function AdminLogin(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = (e) =>{
        e.preventDefault()
        checkLogin(username, password)
    }
        return(
            <div className={styles.Container}>
                <form className={styles.AdminLoginPopup} onSubmit={handleLogin}>
                    <label>Username:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)}className="usernameInput"type="text" placeholder="Enter username"></input>
                    <label>Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}className="passwordInput" type="password" placeholder="Enter password"></input>
                    <button className="loginBtn" type="submit">Login</button>
                </form>
            </div>
            
            
        )
     
}