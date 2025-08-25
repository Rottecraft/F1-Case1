import styles from './BasicLayout.module.css'

export default function VideoContainer(){
    return(
        <div className={styles.basicLayoutContainer} >   
           <div className={styles.basicLayoutHeader}>
                <img src="src/Assets/F1.svg.webp" alt="F1 Logo" className={styles.f1Logo}/>
           </div>


           <div className={styles.basicLayoutBody}>

           </div>


           <div className={styles.basicLayoutFooter}>
                <div className={styles.footerTextContainer}>
                    <p>Copyright @ 2025 Fast Cars, Inc.</p>
                    <p>CVR: 65927514</p>
                </div>

                <div className={styles.counterBox}>
                    <p>Counter: 1929</p>
                </div>
           </div>
        </div>
    )
}