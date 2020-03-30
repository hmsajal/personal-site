import React from 'react'

import styles from './home.module.css'
import HomeNav from './homeNav'
import HomeInfo from './homeInfo'
import ProfileLinks from '../common/profileLinks'


function Home(){
    return(
        <div className={styles.homeDiv} style={{height:window.innerHeight}}>               
            <HomeNav/>                        
            <div className={styles.infoDiv}>
                <HomeInfo/>
            </div>
            <div style={{height:'20%',width:'100%',display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
                <ProfileLinks icolor="gray" iconSize={22} width="320px"/>
            </div>            
        </div>
    )
}

export default Home;