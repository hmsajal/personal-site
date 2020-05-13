import React from 'react'

import styles from './contactDetails.module.css'

export default function ContactDetails() {
    return (
        <div className={styles.detailsMain}>
            <div className={styles.contactInfoHeader}>
                <div style={{borderBottom:'2px solid black'}}>My contact Information</div>
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
                    Connect
                </div>
                <div className={styles.social}>
                </div>                      
            </div> 

            <div className={styles.contactIcons}>
                icons here
            </div>
            <div className={styles.brdr}/>
        </div>   
    )
}
