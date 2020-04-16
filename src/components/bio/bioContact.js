import React from 'react'

import WriteToMe from './writeToMe'
import styles from './bioContact.module.css'

export default function BioContact() {
    return (
        <div>
            <div className="ui center aligned header" style={{padding:30}}>Contact Me</div>
            <WriteToMe/>
        </div>
    )
}
