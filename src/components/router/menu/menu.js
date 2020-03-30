import React from 'react'
import {Link,NavLink} from 'react-router-dom'

import styles from './menu.module.css'
import navStyles from './navMenu.module.css'


export default function Menu(props) {    

    return (           
            <div className={styles.mainDiv}>
                <div className={styles.myNameDiv}>
                    <Link className={styles.myName} to="/">
                       HASAN MAHMUD
                    </Link>
                </div>
                <div className={styles.balancer}></div>
                <div className={styles.navDiv}>
                    <ChooseNavMenu/>
                </div>                
            </div>                  
    )
}

function ChooseNavMenu(props){                
    const widthMatching = window.matchMedia("(min-width:1025px)")
    return widthMatching.matches ? <NavMenu/> : <NavMenu/>    
}


function NavMenu(){
    return(        
        <nav className={navStyles.navList}>            
            <NavLink className={navStyles.link} to="/bio" >
                Bio
            </NavLink>                

            <NavLink className={navStyles.link} to="/career">
                Career
            </NavLink>

            <NavLink className={navStyles.link} to="/blog" >
                Blog
            </NavLink>
        </nav>           
    )
}