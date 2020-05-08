import React,{Fragment} from 'react'

import WriteToMe from './writeToMe'
import styles from './bioContact.module.css'


export default function BioContact() {
    return (
        <Fragment>       
            <div className={styles.head}>
                Contact Me
            </div>
            <div className={styles.main}> 

                <div className={styles.details}>  
                    <div className={styles.contactInfoHeader}>
                        My contact Information
                    </div>  

                    <div className={styles.mainInfo}>
                        <div className={styles.phnName}>
                            Phone
                        </div>
                        <div className={styles.phone}>
                            01672429529
                        </div>                
                        <div className={styles.addrName}>
                            Address
                        </div>
                        <div className={styles.addr}>
                            Dhaka, Bangladesh
                        </div>
                        <div className={styles.msgName}>
                            IM
                        </div>
                        <div className={styles.msg}>

                        </div>
                        <div className={styles.emailName}>
                            Mail
                        </div>
                        <div className={styles.email}>

                        </div>
                        <div className={styles.socialName}>
                            Connect with me
                        </div>
                        <div className={styles.social}>
                        </div>                      
                    </div> 

                    <div className={styles.contactIcons}>
                    </div>
                </div>   

                <div className={styles.writeToMe}>
                    <WriteToMe/>
                </div>
            </div>            
        </Fragment>
    )
}
