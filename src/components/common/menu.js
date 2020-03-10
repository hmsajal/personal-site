import React from 'react'
import {NavLink} from 'react-router-dom'

import {NavMenu,NavBar} from './menuPart'
import styles from './menu.module.css'


export default function Menu(props) {    

    return (           
            <div className={styles.outerDiv}>
                <div className={styles.myNameDiv}>
                    <NavLink class={styles.myName} to="/">
                       HASAN MAHMUD
                    </NavLink>
                </div>
                <ChoosingNavMenu/>
            </div>                  
    )
}

export function ChoosingNavMenu(props){                
    const widthMatching = window.matchMedia("(min-width:1025px)")
    return widthMatching.matches ? <NavMenu/> : <NavBar/>     
}