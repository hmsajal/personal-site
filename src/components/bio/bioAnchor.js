import React from 'react'
import {NavLink,useRouteMatch} from 'react-router-dom'

import styles from './bioAnchor.module.css'


function BioAnchor() {

   let {url}=useRouteMatch()   

    return(        
        <div className={styles.ul}>   
            <div className={styles.linkDiv} style={{background:'#d5e0fe'}}>
               <NavLink className={styles.anchor} to={`${url}/info`} 
                        activeStyle={{color:'#66a80f',fontWeight:'bold',borderBottom:'none'}}
               >
                  intro
               </NavLink> 
            </div>
            <div className={styles.linkDiv} style={{background:'#656371'}}>
               <NavLink className={styles.anchor} to={`${url}/photos`} 
                        activeStyle={{color:'#66a80f',fontWeight:'bold',borderBottom:'none'}}
               >
                  photos                  
               </NavLink>  
            </div>
            <div className={styles.linkDiv} style={{background:'#ff7369'}}>
               <NavLink className={styles.anchor} to={`${url}/contact`} 
                        activeStyle={{color:'#66a80f',fontWeight:'bold',borderBottom:'none'}}
               >
                  contact
               </NavLink>   
            </div>                                                                                                                                              
        </div>  
    )
}

export default BioAnchor
 