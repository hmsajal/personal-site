import React from 'react'


import styles from './bioAnchor.module.css'

function BioAnchor() {
    return(        
        <div className={styles.outerDiv}>              
               <a className={styles.anchor} href="#">
                  intro
               </a>                                                       

               <a className={styles.anchor} href="#">
                  photos                  
               </a>                                                                  
               
               <a className={styles.anchor} href="#">
                  contact
               </a>                                                                                                                                   
        </div>  
    )
}

export default BioAnchor
 