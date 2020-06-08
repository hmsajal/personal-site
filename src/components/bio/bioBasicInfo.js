import React from 'react'

import * as Info from './info'
import styles from './bioBasicInfo.module.css'
import MyImage from '../common/myImage'


export default function BioBasicInfo(props){             
    return (                           
            <div className={styles.main} id="bioBasicInfo">                
                <div className={styles.imgDiv}>
                    <MyImage imgWidth="100%"/>            
                </div>        
                <div className={styles.init}>                        
                    <Info.Init/>                   
                </div>                                    
                <div className={styles.shortInfo}>
                    <Info.ShortInfo/> 
                </div>                                                                                                                                                                                                                                                                                                                        
            </div>                 
    )        
}