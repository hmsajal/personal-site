import React,{Fragment} from 'react'

import styles from './bioBasicInfo.module.css'
import ProfileLinks from './bioProfileLinks'
import MyImage from '../common/myImage'


export default function BioBasicInfo(props){             
    return (
        <>                        
            <div className={styles.main} id="bioBasicInfo">                                       
                <div className={styles.imgParaDiv}>                                                        
                    <div className={styles.myImageDiv}>
                       <MyImage imgWidth="120px"/>            
                    </div>        
                    <div className={styles.paraDiv}>
                        <p>
                            I am Hasan Mahmud Sajal. This is my portfolio site. This portion of the site is kind of an About Me option of a profile of any social networking site. Just for who are interested. Are you?!
                            <br/><br/>I am an app developer who is expert in frontend web and mobile application development and I love to do what I do.                
                        </p>
                    </div>                                                                  
                </div>                                                                                                              
            </div>  
            <div className={styles.profileLinksDiv}>
            <ProfileLinks/>
            </div>
        </>               
    )        
}



const desc = () => {

    return(
        <>                              
               <br/><br/>I am an app developer who is expert in frontend web and mobile application development and I love to do what I do. 
               <br/>I am interested in Science, Human Nature and Philosophy.
        </>
    )
}