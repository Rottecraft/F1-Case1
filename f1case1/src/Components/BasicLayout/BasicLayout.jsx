import styles from './BasicLayout.module.css'

export default function VideoContainer(){
    return(
        <> className={styles.basicLayoutContainer}  
           <div className={styles.basicLayoutHeader}>
                <img src="f1case1\src\Assets\F1.svg.webp" alt="F1 Logo" className={styles.f1Logo}/>
           </div>


           <div className={styles.basicLayoutBody}>

           </div>


           <div className={styles.basicLayoutFooter}>

           </div>
        </>
    )
}