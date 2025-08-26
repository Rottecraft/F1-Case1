import styles from './PointTable.module.css'


export default function PointTable(){
    return(
        <div className={styles.PointTable}>
                <div className={styles.Header}>
                    <div className={styles.PlacingTitle}>
                        <h1>Placing</h1>
                    </div>
                    <div className={styles.LeaderboardTitle}>
                        <h1>Leaderboard</h1>
                    </div>
                    <div className={styles.PointsTitle}>
                        <h1>Points</h1>
                    </div>
                </div>
            <div className={styles.BodyContainer}>
                <div className={styles.LeftColumn}>
                    <div className={styles.PlacingBox}>
                        <ul>
                            <li>
                                <p>1</p>
                            </li>
                            <li>
                                <p>2</p>
                            </li>
                            <li>
                                <p>3</p>
                            </li>
                            <li>
                                <p>4</p>
                            </li>
                            <li>
                                <p>5</p>
                            </li>
                            <li>
                                <p>6</p>
                            </li>
                            <li>
                                <p>7</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.MiddleColumn}>
                    <div className={styles.NameBox}>
                        <ul>
                            <li>
                                <img className={styles.TeamLogo} src="src/assets/TeamLogo/mclaren.png" alt="McLaren" />
                                <p>Norris</p>
                                <img className={styles.Driver} src='src/assets/Drivers/verstappen.png' alt='Verstappen'/>
                            </li>
                            <li>
                                <img className={styles.TeamLogo} src="src/assets/TeamLogo/redbull.png" alt="Red Bull Racing" />
                                <p>Verstappen</p>
                                <img className={styles.Driver} src='src/assets/Drivers/verstappen.png' alt='Verstappen'/>
                            </li>
                            <li>
                                <img className={styles.TeamLogo} src="src/assets/TeamLogo/ferrari.png" alt="Ferrari" />
                                <p>Hamilton</p>
                                <img className={styles.Driver} src='src/assets/Drivers/verstappen.png' alt='Verstappen'/>
                            </li>
                            <li>
                                <img className={styles.TeamLogo} src="src/assets/TeamLogo/McLaren.png" alt="McLaren" />
                                <p>Piastri</p>
                                <img className={styles.Driver} src='src/assets/Drivers/verstappen.png' alt='Verstappen'/>
                            </li>
                            <li>
                                <img className={styles.TeamLogo} src="src/assets/TeamLogo/redbull.png" alt="Red Bull Racing" />
                                <p>Tsunoda</p>
                                <img className={styles.Driver} src='src/assets/Drivers/verstappen.png' alt='Verstappen'/>
                            </li>
                            <li>
                                <img className={styles.TeamLogo} src="src/assets/TeamLogo/aston-martin.png" alt="Aston Martin" />
                                <p>Alonso</p>
                                <img className={styles.Driver} src='src/assets/Drivers/verstappen.png' alt='Verstappen'/>
                            </li>
                            <li>
                                <img className={styles.TeamLogo} src="src/assets/TeamLogo/Mercedes.png" alt="Mercedes" />
                                <p>Antonelli</p>
                                <img className={styles.Driver} src='src/assets/Drivers/verstappen.png' alt='Verstappen'/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.RightColumn}>
                    <div className={styles.PointsBox}>
                        <ul>
                            <li><p>10</p></li>
                            <li><p>20</p></li>
                            <li><p>30</p></li>
                            <li><p>40</p></li>
                            <li><p>50</p></li>
                            <li><p>60</p></li>
                            <li><p>70</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

