import React,{useState} from 'react'
import styled from 'styled-components'
import {BrowserRouter,NavLink} from 'react-router-dom'
import {Drawer,Button, Icon} from 'antd'


const NavItemsGroup = styled.nav`
      width:60%;                  
      display:flex;        
      justify-content:space-between;    
      align-items:center;  
      height:100%;                                          
`
const StyledNavLink = styled(NavLink)`
      color:#555;      
      font-size:18px;        
      font-weight:400;
      font-family:Roboto Slab;                        
          :hover{
              color:#226051;  
              font-weight:700;            
          };                      
`


export function NavMenu(){
    return(
        <div style={{width:'40%'}}>
            <NavItemsGroup>            
                <StyledNavLink to="/bio" >
                    Bio
                </StyledNavLink>                

                <StyledNavLink to="/career">
                    Career
                </StyledNavLink>

                <StyledNavLink to="/blog" >
                    Blog
                </StyledNavLink>
            </NavItemsGroup>
        </div>        
    )
}

export function NavBar(){

    const [visibleState, setVisibleState] = useState(false)
    
    return(
        <div>
            <Button className="navigationButton" type="default" onClick={()=>setVisibleState(true)} 
                    style={{border:'0px'}}>
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

