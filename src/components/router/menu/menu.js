import React from 'react'
import {Link} from 'react-router-dom'

import {NavMenu,NavBar} from './menuPart'
import styles from './menu.module.css'


export default function Menu(props) {    

    return (           
            <div className={styles.mainDiv}>
                <div className={styles.myNameDiv}>
                    <Link className={styles.myName} to="/">
                       HASAN MAHMUD
                    </Link>
                </div>
                <ChoosingNavMenu/>
            </div>                  
    )
}

export function ChoosingNavMenu(props){                
    const widthMatching = window.matchMedia("(min-width:1025px)")
    return widthMatching.matches ? <NavMenu/> : <NavBar/>     
}