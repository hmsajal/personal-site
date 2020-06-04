import React from 'react'

import * as Info from './info'
import styles from './bioBasicInfo.module.css'
import MyImage from '../common/myImage'


export default function BioBasicInfo(props){             
    return (                           
            <div className={styles.main} id="bioBasicInfo">                                                               
                <div className={styles.imgParaDiv}>
                    <div className={styles.myImageDiv}>
                        <MyImage imgWidth="220px"/>            
                    </div>        
                    <div className={styles.paraDiv}>                        
                        <Info.Init/>                   
                    </div>                    
                </div>    
                <Info.ShortInfo/>                                                                                                                                                                                                                                                                                                         
            </div>                 
    )        
}