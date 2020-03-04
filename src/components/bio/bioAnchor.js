import React from 'react'

import styles from './bioAnchor.module.css'


let showItem = function(vis1,vis2,vis3){
   document.getElementById("bioBasicInfo").style.visibility = vis1
   document.getElementById("bioPhotos").style.visibility = vis2
   document.getElementById("bioContact").style.visibility = vis3
}

function BioAnchor() {
    return(        
        <div className={styles.outerDiv}>              
               <a className={styles.anchor} href="#bioBasicInfo" onClick={()=>showItem('visible','hidden','hidden')}>
                  intro
               </a>                                                       

               <a className={styles.anchor} href="#bioPhotos" onClick={()=>showItem('hidden','visible','hidden')}>
                  photos                  
               </a>                                                                  
               
               <a className={styles.anchor} href="#bioContact" onClick={()=>showItem('hidden','hidden','visible')}>
                  contact
               </a>                                                                                                                                   
        </div>  
    )
}

export default BioAnchor
 