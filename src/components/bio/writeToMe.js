import React from 'react'

import styles from './writeToMe.module.css'

function WriteToMe(props) {
    return (        
            <div className={styles.main}>                
                <div className="ui form">
                    <h3 className="ui dividing header">Tell Me Something</h3>
                    <br/>
                    <div className="two fields">                                                
                        <div className="ten wide field required">
                            <label>Formal Name</label>
                            <input type="text" placeholder="Your formal name"/>
                        </div>
                        <div className="six wide field">
                            <label>Nick Name</label>
                            <input type="text" placeholder="Your nick name"/>
                        </div>                                                                 
                    </div>
                    <div className="field">
                        <label>Email or Phone</label>
                        <input type="text" placeholder="Your email or phone number"/>
                    </div>
                    <div className="field required">
                        <label>Message</label>
                        <textarea placeholder="Write something..."/>
                    </div>                    
                    <div className="ui submit button">
                        Send
                    </div>                    
                </div>
            </div>        
    )
}

export default WriteToMe