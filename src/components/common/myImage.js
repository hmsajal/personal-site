import React from 'react'

import styles from './myImage.module.css'


export default function MyImage(props){
    return(        
        <div style={{width:props.imgWidth}}>
            <img className={styles.myImage} src={require('../../assets/images/myPhoto.jpg')} 
                 alt="Hasan Mahmud Sajal" 
            />
        </div>        
    )
}
