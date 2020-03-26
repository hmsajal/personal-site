import React from 'react'

import styles from './bioContact.module.css'

function BioContact(props) {
    return (        
            <div className={styles.main} id="bioContact">                
                <div class="ui form">
                    <h3 class="ui dividing header">Tell Me Something</h3>
                    <br/>
                    <div class="two fields">                                                
                        <div class="ten wide field required">
                            <label>Formal Name</label>
                            <input type="text" placeholder="Your formal name"/>
                        </div>
                        <div class="six wide field">
                            <label>Nick Name</label>
                            <input type="text" placeholder="Your nick name"/>
                        </div>                                                                 
                    </div>
                    <div class="field">
                        <label>Email or Phone</label>
                        <input type="text" placeholder="Your email or phone number"/>
                    </div>
                    <div class="field required">
                        <label>Message</label>
                        <textarea placeholder="Write something..."/>
                    </div>                    
                    <div class="ui submit button">
                        Send
                    </div>                    
                </div>
            </div>        
    )
}

export default BioContact