import React from 'react'

import styles from './bioBasic.module.css'
import ProfileLinks from './bioProfileLinks'
import MyImage from '../common/myImage'


export default function BioBasicInfo(props){             
    return (                                    
                <div className={styles.mainDiv}>                    
                        <div className={styles.imgParaDiv}>                                                        
                            <div className={styles.myImageDiv}>
                               <MyImage/>            
                            </div>        
                            <div className={styles.paraDiv}>
                                Hi, Sajal here. This is my portfolio website. 
                                If you are interested about me or my website, you can browse this site.
                                I hope that you can know a bit about me.                        
                            </div>                                                                  
                        </div>       
                        <div>
                              <ProfileLinks/>
                        </div>                                   
                </div>                                             
    )        
}