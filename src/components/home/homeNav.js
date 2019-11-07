import React from 'react'
import styled from 'styled-components'
import {BrowserRouter,NavLink} from 'react-router-dom'


const Div = styled.div`
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:100%;                        
`

const NavMenu = styled.nav`
      width:30%;                  
      display:flex;      
      justify-content:space-evenly;
      align-items:center;        
      padding:20px 30px 0px 0px;                       
`
const MyName = styled.span`
      font-size:32px;      
      font-family:fira sans,sans-serif;
      letter-spacing:1.5px;
      color:#214;       
      width:60%;    
      padding:40px 0px 0px 70px;      
`
const StyledNavLink = styled(NavLink)`
      color:#214;      
      font-size:24px;  
      font-family:lato;    
      
          :hover{
              color:#ddd;
          }
        
`

function HomeNav() {
    return (
        <Div>           
            <MyName>HASAN MAHMUD</MyName>
            <NavMenu>            
                <StyledNavLink to="/bio" >
                    bio
                </StyledNavLink>

                <StyledNavLink to="/blog" >
                    blog
                </StyledNavLink>

                <StyledNavLink to="/">
                    others
                </StyledNavLink>
            </NavMenu>
        </Div>        
    )
}

export default HomeNav;
