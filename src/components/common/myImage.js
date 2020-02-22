import React from 'react'

import MyPhoto from '../../assets/images/myPhoto.jpg'
import styles from './myImage.module.css'


export default function MyImage(props){
    return(        
        <div style={{width:props.imgWidth}}>
            <img className={styles.myImage} src={MyPhoto} alt="Hasan Mahmud Sajal" />
        </div>        
    )
}
