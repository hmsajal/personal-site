import React from 'react'

import {NavMenu,NavBar} from './menuPart'
import styles from './menu.module.css'


export default function Menu(props) {    

    return (           
            <div className={styles.outerDiv}>
                <div className={styles.myName}>HASAN MAHMUD</div>
                <ChoosingNavMenu/>
            </div>                  
    )
}

export function ChoosingNavMenu(props){                
    const widthMatching = window.matchMedia("(max-width:1024px)")
    return widthMatching.matches ? <NavBar/> : <NavMenu/>     
}