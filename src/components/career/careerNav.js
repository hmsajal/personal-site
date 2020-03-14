import React from 'react'

import styles from './careerNav.module.css'
import {store} from '../../store'

export default function CareerNav() {
    return (
        <div className={styles.mainDiv}>    
            <a className={styles.navLink} href="#career-about-me">
                About Me
            </a>  

            <a className={styles.navLink} href="#career-skills">
                Skills                  
            </a>                                 
            
            <a className={styles.navLink} href="#career-projects">
                Projects                               
            </a>  
            
            <a className={styles.navLink} href="#career-education">
                Education               
            </a> 

            <a className={styles.navLink} href="#career-certifications">
                Certifications              
            </a>   
            
            <a className={styles.navLink} href="#career-experiences">
                Experiences                 
            </a>      

            <a className={styles.navLink} href="#career-others">
                Others                
            </a>                                         
        </div>
    )
}
