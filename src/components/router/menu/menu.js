import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {Drawer,List,ButtonBase} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faCode,faRss,faBars} from '@fortawesome/free-solid-svg-icons'

import styles from './menu.module.css'
import navStyles from './nav.module.css'
import drawerStyles from './drawer.module.css'


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

    let [drawerState, setState] = React.useState(false)
    
    return(
        <React.Fragment>
            <ButtonBase onClick={()=>setState(true)} className={navStyles.navbutton}>
                <MenuIcon style={{fontSize:28}}/>
            </ButtonBase>
            <Drawer open={drawerState} anchor="top" onClose={()=>setState(false)}
                    ModalProps={{onClose:()=>setState(false)}}
            >    
                <DrawerChild toggleDrawer={()=>setState(false)}/> 
            </Drawer>
        </React.Fragment>
    )
}


const DrawerChild = (props) => (
    <div className={drawerStyles.child}> 
        <ButtonBase style={{marginTop:'80px'}} onClick={()=>props.toggleDrawer()}>
             <CloseIcon style={{fontSize:36}}/>
        </ButtonBase>            
        <List className={drawerStyles.list}>
            {['Bio','Career','Blog'].map((text,index)=>(                
                   <NavLink key={text} to={`/${text}`} onClick={()=>props.toggleDrawer()}>
                        <div className={drawerStyles.iconText}>
                            <span>
                                <FontAwesomeIcon icon={index===0?faUser:(index===1?faCode:faRss)}
                                                style={{fontSize:'22px',color:'#c42'}}
                                /> 
                            </span>                                                                                                   
                            <span>
                                {text}
                            </span>
                        </div>
                    </NavLink>                                                                           
            ))}
        </List>
    </div>
)