import React, { useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {Drawer,Button, Icon} from 'antd'

import styles from './menuPart.module.css'

import {store} from '../../store.js'


export function NavMenu(props){   
        
    const globalState = useContext(store)
    const {state,dispatch} = globalState
    
    return(
        <div style={{width:'40%'}}>
            <nav className={styles.navList}>            
                <NavLink className={styles.navLink} style={{color:state.selectedMenu==="/bio" &&  "green"}} to="/bio" >
                    Bio
                </NavLink>                

                <NavLink className={styles.navLink} style={{color:state.selectedMenu==="/career" &&  "green"}} to="/career">
                    Career
                </NavLink>

                <NavLink className={styles.navLink} style={{color:state.selectedMenu==="/blog" &&  "green"}} to="/blog" >
                    Blog
                </NavLink>
            </nav>
        </div>        
    )
}

export function NavBar(){

    const [visibleState, setVisibleState] = React.useState(false)
    
    return(
        <div>
            <Button className="navigationButton" type="default" onClick={()=>setVisibleState(true)} 
                    style={{border:'none',boxShadow:'none'}}>
                <Icon type="menu" style={{fontSize:20}} />
            </Button>

            <Drawer                                
                placement="right"
                closable={false}
                onClose={()=>setVisibleState(false)}
                visible={visibleState}
                drawerStyle={{backgroundColor:"#555"}}
            >
                     <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-evenly',
                     color:'black',height:100}}>
                        <NavLink to="/bio">Bio</NavLink>
                        <NavLink to="/career">Career and Skills</NavLink>
                        <NavLink to="/blog">Blog</NavLink>  
                    </div>                                          
            </Drawer>
        </div>
    )
}

