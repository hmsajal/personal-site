import React from 'react'

import styles from './home.module.css'

import NavMenu from './navMenu'
import HomeInfo from './homeInfo'
import ProfileLinks from '../common/profileLinks'


function Home(){
    return(
        <div className={styles.homeDiv}>               
            <div className={styles.navDiv}>                           
                <NavMenu/>
            </div>                     
            <div className={styles.infoDiv}>
                <HomeInfo/>
            </div>
            <div className={styles.prolinkDiv}>
                <ProfileLinks icolor="gray" iconSize={22} width="320px"/>
            </div>            
        </div>
    )
}

export default Home;