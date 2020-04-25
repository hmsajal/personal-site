import React,{Fragment} from 'react'
import {NavLink} from 'react-router-dom'

import styles from './navMenu.module.css'


export default function NavMenu(){
    return(
        <>    
            <NavLink className={styles.link} to="/bio" >
                Bio
            </NavLink>                

            <NavLink className={styles.link} to="/career">
                Career
            </NavLink>

            <NavLink className={styles.link} to="/blog" >
                Blog
            </NavLink>
        </>
    )
}