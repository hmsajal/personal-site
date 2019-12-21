import React, { useContext } from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {Drawer,Button, Icon} from 'antd'

import {store} from '../../store.js'

const NavItemsGroup = styled.nav`
      width:60%;                  
      display:flex;        
      justify-content:space-between;    
      align-items:center;  
      height:100%;    
                                                    
`
const StyledNavLink = styled(NavLink)`
      color:#444;     
      font-size:19px;        
      font-weight:400;
      font-family:Roboto Slab;
      transition:all .1s;
      :hover{                  
          color:inherit;
          font-weight:bold;     
          text-shadow:3px 3px 3px #ccc;           
      }    
      :active{
          color:green;
          font-weight:bold;                    
          text-shadow:3px 3px 4px #888;                              
      }
`


export function NavMenu(props){   
    
    const globalState = useContext(store)
    const {state,dispatch} = globalState
    
    return(
        <div style={{width:'40%'}}>
            <NavItemsGroup >            
                <StyledNavLink style={{color:state.selectedMenu==="/bio" &&  "green"}} to="/bio" >
                    Bio
                </StyledNavLink>                

                <StyledNavLink  style={{color:state.selectedMenu==="/career" &&  "green"}} to="/career">
                    Career
                </StyledNavLink>

                <StyledNavLink style={{color:state.selectedMenu==="/blog" &&  "green"}} to="/blog" >
                    Blog
                </StyledNavLink>
            </NavItemsGroup>
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

