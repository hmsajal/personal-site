import React from 'react'

import styles from './bioBasic.module.css'
import ProfileLinks from './bioProfileLinks'
import MyImage from '../common/myImage'


export default function BioBasicInfo(props){             
    return (                                    
                <div className={styles.mainDiv}>                    
                        <div className={styles.imgParaDiv}>                                                        
                            <div className={styles.myImageDiv}>
                               <MyImage imgWidth="120px"/>            
                            </div>        
                            <div className={styles.paraDiv}>
                                I am Hasan Mahmud Sajal. This is my portfolio site and this part is about introducing myself.
                                <br/>If you are interested to know- I am a app developer who is expert in Frontend Development with JavaScript and its frameworks. I love to do what I do. 
                                <br/><br/> In the following lines I am providing some basic information about me which might not be interesting but should be helpful if you anyway want to know about me.                                
                            </div>                                                                  
                        </div>       
                        <div className={styles.profileDiv}>
                              <ProfileLinks/>
                        </div>                                   
                </div>                                             
    )        
}