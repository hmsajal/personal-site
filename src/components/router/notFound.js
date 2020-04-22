import React from 'react'

import styles from './routing.module.css'

const NotFound = (props)=>{            
    return (
        <div className={styles.notFound}>
            <div style={{fontSize:70,fontWeight:'bold'}}>404</div>
            <p style={{marginTop:20}}>page not found</p>
        </div>)
}
export default NotFound
