import styles from "./AdminLogin.module.css"

export default function AdminLogin(){
    return(
        <div className={styles.Container}>
            <form className={styles.AdminLoginPopup}>
                <label>Username:</label>
                <input type="text" placeholder="Enter username"></input>
                <label>Password:</label>
                <input type="password" placeholder="Enter password"></input>
                <button id="loginBtn">Login</button>
            </form>
        </div>
    )
}