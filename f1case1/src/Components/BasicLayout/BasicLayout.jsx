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

           </div>
        </div>
    )
}