import React from 'react'
import {NavLink} from 'react-router-dom'

import styles from './bioAnchor.module.css'


function BioAnchor() {
    return(        
        <div className={styles.ul}>              
               <NavLink className={styles.anchor} to="/bio/info" activeStyle={{color:'green'}}>
                  intro
               </NavLink>                                                       

               <NavLink className={styles.anchor} to="/bio/photos" activeStyle={{color:'green'}}>
                  photos                  
               </NavLink>                                                                  
               
               <NavLink className={styles.anchor} to="/bio/contact" activeStyle={{color:'green'}}>
                  contact
               </NavLink>                                                                                                                                   
        </div>  
    )
}

export default BioAnchor
 