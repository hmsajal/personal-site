import React from 'react'
import {NavLink,useRouteMatch} from 'react-router-dom'

import styles from './bioAnchor.module.css'


function BioAnchor() {

   let {url}=useRouteMatch()   

    return(        
        <div className={styles.ul}>   
            <div className={styles.linkDiv} style={{background:'#c2d299'}}>
               <NavLink className={styles.anchor} to={`${url}/info`} 
                        activeStyle={{color:'#000',fontWeight:'normal',borderBottom:'none'}}
               >
                  intro
               </NavLink> 
            </div>
            <div className={styles.linkDiv} style={{background:'#4c6c8d'}}>
               <NavLink className={styles.anchor} to={`${url}/photos`} 
                        activeStyle={{color:'#000',fontWeight:'normal',borderBottom:'none'}}
               >
                  photos                  
               </NavLink>  
            </div>
            <div className={styles.linkDiv} style={{background:'#c6c9d5'}}>
               <NavLink className={styles.anchor} to={`${url}/contact`} 
                        activeStyle={{color:'#000',fontWeight:'normal',borderBottom:'none'}}
               >
                  contact
               </NavLink>   
            </div>                                                                                                                                              
        </div>  
    )
}

export default BioAnchor
 