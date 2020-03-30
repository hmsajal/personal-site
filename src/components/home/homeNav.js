import React from 'react'
import {NavLink} from 'react-router-dom'

import styles from './homeNav.module.css'


export default function HomeNav() {
    return (
        <div className={styles.navMain}>           
            <div className={styles.myName}>HASAN MAHMUD</div>
            <ChooseNavMenu/>
        </div>        
    )
}

function ChooseNavMenu(){     
    const widthMatching = window.matchMedia("(max-width:790px)")
    return widthMatching.matches ? <NavMenu/> : <NavMenu/>     
}

function NavMenu(){
    return(
        <nav className={styles.navGroup}>            
            <NavLink className={styles.link} to="/bio" >
                Bio
            </NavLink>                

            <NavLink className={styles.link} to="/career">
                Career
            </NavLink>

            <NavLink className={styles.link} to="/blog" >
                Blog
            </NavLink>
        </nav>
    )
}