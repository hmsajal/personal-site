import React from 'react'
import {Link,NavLink} from 'react-router-dom'

import styles from './menu.module.css'
import navStyles from './nav.module.css'


export default function Menu(props) {    

    return (           
            <div className={styles.mainDiv} id="menu">                
                <Link className={styles.myName} to="/">
                   HASAN MAHMUD
                </Link>                                
                <NavMenu/>
                <NavBar/>
            </div>                  
    )
}

// function ChooseNav(props){                
//     const widthMatching = window.matchMedia("(min-width:1025px)")
//     return widthMatching.matches ? <NavMenu/> : <NavBar/>    
// }


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


function NavBar(){
    return(
        <button className="ui button icon navbutton">
            <i className="bars icon"></i>
        </button>
    )
}