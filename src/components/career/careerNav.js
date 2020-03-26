import React from 'react'
import {Link} from 'react-router-dom'

import styles from './careerNav.module.css'


export default function CareerNav() {

    return (
        <div className={styles.mainDiv}>    
            <Link className={styles.navLink} to="career/about-me">
                About Me                
            </Link>  

            <Link className={styles.navLink} to="career/skills">
                Skills                  
            </Link>                                 
            
            <Link className={styles.navLink}>
                Projects                               
            </Link>  
            
            <Link className={styles.navLink}>
                Education               
            </Link> 

            <Link className={styles.navLink}>
                Certifications              
            </Link>   
            
            <Link className={styles.navLink}>
                Experiences                 
            </Link>      

            <Link className={styles.navLink}>
                Others                
            </Link>                                         
        </div>
    )
}
