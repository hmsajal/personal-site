import React from 'react'

import styles from './writeToMe.module.css'

function WriteToMe(props) {
    return (   
        <div className={styles.main}>
            <div className={styles.header}>
                <div style={{borderBottom:'2px solid black'}}>Write to me</div>
            </div>
            <div className={styles.brdr}></div>
            <div className={styles.contactForm}>                                                                                                                                  
                <div className="field required">
                    <label>Name</label>                        
                    <input type="text" placeholder="Your name" style={{height:38}}/>                                             
                </div>                                                                                                             
                <div className="field">
                    <label>Email or Phone</label>
                    <input type="text" placeholder="Your email or phone number" style={{height:38}}/>
                </div>
                <div className="field required">
                    <label>Message</label>
                    <textarea placeholder="Write something..." style={{height:120}}/>
                </div>                    
                <div className="ui submit button">
                    Send
                </div>                                    
            </div>
        </div>             
    )
}

export default WriteToMe