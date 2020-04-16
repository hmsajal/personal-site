import React from 'react'
import {NavLink,useRouteMatch} from 'react-router-dom'

import styles from './bioAnchor.module.css'


function BioAnchor() {

   let {url}=useRouteMatch()   

    return(        
        <div className={styles.ul}>              
               <NavLink className={styles.anchor} to={`${url}/info`} activeStyle={{color:'green'}}>
                  intro
               </NavLink>                                                       

               <NavLink className={styles.anchor} to={`${url}/photos`} activeStyle={{color:'green'}}>
                  photos                  
               </NavLink>                                                                  
               
               <NavLink className={styles.anchor} to={`${url}/contact`} activeStyle={{color:'green'}}>
                  contact
               </NavLink>                                                                                                                                   
        </div>  
    )
}

export default BioAnchor
 