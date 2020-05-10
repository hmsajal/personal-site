import React from 'react'
import {NavLink} from 'react-router-dom'

import styles from './careerNav.module.css'


export default function CareerNav() {

    return (
        <div className={styles.mainDiv}>    
            <NavLink className={styles.navLink} to="/about-me">
                About Me                
            </NavLink>  

            <NavLink className={styles.navLink} to="/skills">
                Skills                  
            </NavLink>                                 
            
            <NavLink className={styles.navLink} to="/projects">
                Projects                               
            </NavLink>  
            
            <NavLink className={styles.navLink} to="/education">
                Education               
            </NavLink> 

            <NavLink className={styles.navLink} to="/certifications">
                Certifications              
            </NavLink>   
            
            <NavLink className={styles.navLink} to="/experiences">
                Experiences                 
            </NavLink>      

            <NavLink className={styles.navLink} to="/others">
                Resume                
            </NavLink>                                         
        </div>
    )
}
