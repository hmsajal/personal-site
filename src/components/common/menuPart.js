import React,{useState} from 'react'
import styled from 'styled-components'
import {BrowserRouter,NavLink} from 'react-router-dom'
import {Drawer,Button, Icon} from 'antd'

const NavButtonDiv = styled.div`      
      .navigationButton{
          border-color:#333;
          border-width:2px;
      };      
`

const NavItemsGroup = styled.nav`
      width:280px;                  
      display:flex;      
      justify-content:space-between;
      align-items:center;  
      height:100%;                            
`
const StyledNavLink = styled(NavLink)`
      color:#214;      
      font-size:22px;  
      font-family:lato;    
      
          :hover{
              color:#ccc;
          }        
`


export function NavMenu(){
    return(
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
    )
}

export function NavBar(){

    const [visibleState, setVisibleState] = useState(false)
    
    return(
        <NavButtonDiv>
            <Button className="navigationButton" type="default" onClick={()=>setVisibleState(true)} 
                    style={{background:'#008081',width:"25px",height:"33px",
                            display:'flex',justifyContent:'center'
                           }}
            >
                <Icon type="menu" style={{fontSize:18}}/>
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
        </NavButtonDiv>
    )
}

