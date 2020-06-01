import React from 'react'

import {NavLink} from 'react-router-dom'
import styles from './careerNavMini.module.css'

export default function CareerNavMini(props){
    return(
        <div className={styles.mainDiv}>    
            <NavLink className={styles.navLink} to="/">
                MENU
            </NavLink> 
        </div> 
    )
}