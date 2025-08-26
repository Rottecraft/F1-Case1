import styles from './TeamTable.module.css'

export default function TeamTable(){
    return(
        <div className={styles.entireTeamTable}>
            <p>2025 Official Team Lineup</p>

            <div className={styles.teamRowsContainer}>
                <ul>
                    <li className={styles.ferrariRow}> {/* Ferrari */}
                        <img className={styles.carLogo} src="./src/Assets/TeamCars/Ferrari.png" alt="didnt load" />

                        <div className={styles.rightEndRow}>
                            <div className={styles.driverNamesContainer}>
                                <p>Charles <span>Leclerc</span></p> {/* first name */}
                                <p>Lewis <span>Hamilton</span></p> {/* last name */}
                            </div>
                            <img className={styles.teamLogo} src="./src/Assets/TeamLogo/ferrari.png" alt="" />
                        </div>
                    </li>

                    <li className={styles.mclarenRow}> {/* McLaren */}
                        <img className={styles.carLogo} src="./src/Assets/TeamCars/McLaren.png" alt="didnt load" />

                        <div className={styles.rightEndRow}>
                            <div className={styles.driverNamesContainer}>
                                <p>Oscar <span>Piastri</span></p> {/* first name */}
                                <p>Lando <span>Norris</span></p> {/* last name */}
                            </div>
                            
                            <img className={styles.teamLogo} src="./src/Assets/TeamLogo/mclaren.png" alt="" />
                        </div>
                    </li>
                    
                    <li className={styles.mercedesRow}> {/* Mercedes */}
                        <img className={styles.carLogo} src="./src/Assets/TeamCars/Mercedes.png" alt="didnt load" />

                        <div className={styles.rightEndRow}>
                            <div className={styles.driverNamesContainer}>
                                <p>George <span>Russell</span></p> {/* first name */}
                                <p>Kimi <span>Antonelli</span></p> {/* last name */}
                            </div>
                            
                            <img className={styles.teamLogo} src="./src/Assets/TeamLogo/mercedes.png" alt="" />
                        </div>
                    </li>
                    
                    <li className={styles.redbullRow}> {/* Red Bull */}
                        <img className={styles.carLogo} src="./src/Assets/TeamCars/RedBull.png" alt="didnt load" />

                        <div className={styles.rightEndRow}>
                            <div className={styles.driverNamesContainer}>
                                <p>Max <span>Verstappen</span></p> {/* first name */}
                                <p>Yuki <span>Tsunoda</span></p> {/* last name */}
                            </div>
                            
                            <img className={styles.teamLogo} src="./src/Assets/TeamLogo/redbull.png" alt="" />
                        </div>
                    </li>
                    
                    <li className={styles.alpineRow}> {/* Alpine */}
                        <img className={styles.carLogo} src="./src/Assets/TeamCars/Alpine.png" alt="didnt load" />

                        <div className={styles.rightEndRow}>
                            <div className={styles.driverNamesContainer}>
                                <p>Pierre <span>Gasly</span></p> {/* first name */}
                                <p>Franco <span>Colapinto</span></p> {/* last name */}
                            </div>
                            
                            <img className={styles.teamLogo} src="./src/Assets/TeamLogo/alpine.png" alt="" />
                        </div>
                    </li>
                    
                    <li className={styles.astonmartinRow}> {/* Aston Martin */}
                        <img className={styles.carLogo} src="./src/Assets/TeamCars/AstonMartin.png" alt="didnt load" />

                        <div className={styles.rightEndRow}>
                            <div className={styles.driverNamesContainer}>
                                <p>Lance <span>Stroll</span></p> {/* first name */}
                                <p>Fernando <span>Alonso</span></p> {/* last name */}
                            </div>
                            
                            <img className={styles.teamLogo} src="./src/Assets/TeamLogo/aston-martin.png" alt="" />
                        </div>
                    </li>
                    
                    <li className={styles.kicksauberRow}> {/* Kick Sauber */}
                        <img className={styles.carLogo} src="./src/Assets/TeamCars/KickSauber.png" alt="didnt load" />

                        <div className={styles.rightEndRow}>
                            <div className={styles.driverNamesContainer}>
                                <p>Nico <span>Hulkenberg</span></p> {/* first name */}
                                <p>Gabriel <span>Bortoleto</span></p> {/* last name */}
                            </div>

                            <img className={styles.teamLogo} src="./src/Assets/TeamLogo/kick-sauber.png" alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}


