
import { Navigate } from "react-router-dom";
import TeamTable from "../TeamTable/TeamTable.jsx";
import PointTable from "../PointTable/PointTable.jsx";
import styles from './BasicLayout.module.css'
import VisitsCounter from "../VisitsCounter/Visitscounter.jsx";
import { useState } from "react";





export default function VideoContainer(){

      const [redirect, setRedirect] = useState(false);
      if (redirect) { 
      return ( <Navigate to="/adminlogin" />);
      }
    return(
        <div className={styles.basicLayoutContainer} >   
           <div className={styles.basicLayoutHeader}>
                <div className={styles.f1LogoContainer}>
                    <img src="src/Assets/F1.svg.webp" alt="F1 Logo" className={styles.f1Logo}/>
                </div> 

                <div className={styles.loginButtonContainer}>
                      <form className={styles.AdminLoginPopup} onSubmit={(e) => {e.preventDefault();setRedirect(true)}}>
                        <button className="loginBtn" type="submit">Login</button>
                      </form>
                </div>
           </div>


           <div className={styles.basicLayoutBody}>
                <div className={styles.topBodyContainer}>
                    <div className={styles.teamTable}>
                        <TeamTable />
                    </div>

                    <div className={styles.pointTable}>
                        <PointTable />
                    </div>
                </div>

                <div className={styles.videoContainer}>
                    <p>Videos</p>
                    <iframe 
                        src="https://www.youtube.com/embed/UYh8ATF8L0c" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                </div>
           </div>


           <div className={styles.basicLayoutFooter}>
                <div className={styles.footerTextContainer}>
                    <p>Copyright @ 2025 Fast Cars, Inc.</p>
                    <p>CVR: 65927514</p>
                </div>

                <div className={styles.counterBox}>
                    <VisitsCounter />
                </div>
           </div>
        </div>
    )
}