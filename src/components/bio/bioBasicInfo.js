import React from 'react'

import styles from './bioBasicInfo.module.css'
import ProfileLinks from './bioProfileLinks'
import MyImage from '../common/myImage'


export default function BioBasicInfo(props){             
    return (                      
                    <div className={styles.main} id="bioBasicInfo">                                       
                        <div className={styles.imgParaDiv}>                                                        
                            <div className={styles.myImageDiv}>
                               <MyImage imgWidth="120px"/>            
                            </div>        
                            <div className={styles.paraDiv}>
                                I am Hasan Mahmud Sajal. This is my portfolio site and in this part I am introducing myself. I am interested in Science, Human Nature and Philosophy.
                                <br/>If you are interested to know- I am an app developer who is expert in frontend web and mobile application development and I love to do what I do.                                 
                            </div>                                                                  
                        </div>       
                        <div className={styles.profileDiv}>
                              <ProfileLinks/>
                        </div>                                                                                
                    </div>                
    )        
}