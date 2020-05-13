import React from 'react'

import ContactDetails from './contactDetails'
import WriteToMe from './writeToMe'
import styles from './bioContact.module.css'


export default function BioContact() {
    return (               
        <div className={styles.main}>                        
            <ContactDetails/>                                    
            <WriteToMe/>            
        </div>                    
    )
}
