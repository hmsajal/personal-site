import React from 'react'
import styled from 'styled-components'
import {BrowserRouter,NavLink,useRouteMatch} from 'react-router-dom'
import {Slide} from 'react-burger-menu'


const Div = styled.div`
      margin-top:40px;
      display:flex;      
      align-items:center;
      width:100%;    
      justify-content:space-between;                                
`

const NavItemsGroup = styled.nav`
      width:420px;                  
      display:flex;      
      justify-content:space-evenly;
      align-items:center;  
      height:100%;      
      padding-right:20px;                     
`
const MyName = styled.span`
      font-size:32px;      
      font-family:fira sans,sans-serif;
      letter-spacing:1.5px;
      color:#6c6;  
      padding-left:60px;                          
`
const StyledNavLink = styled(NavLink)`
      color:#214;      
      font-size:22px;  
      font-family:lato;    
      
          :hover{
              color:#ddd;
          }
        
`
const {url,path} =useRouteMatch;
console.log(url,path)

function HomeNav() {
    return (
        <Div>           
            <MyName>HASAN MAHMUD</MyName>
            <ChoosingNavMenu/>
        </Div>        
    )
}

export function ChoosingNavMenu(){
    var matching = window.matchMedia("(max-width: 890px)")
    return(matching ? <NavBar/> : <NavMenu/>)
}

export function NavMenu(){
            return(
                <NavItemsGroup>            
                    <StyledNavLink to="${url}/bio" >
                        Bio
                    </StyledNavLink>                

                    <StyledNavLink to="/site/career">
                        Career
                    </StyledNavLink>

                    <StyledNavLink to="/site/blog" >
                        Blog
                    </StyledNavLink>
                </NavItemsGroup>
            )
}

export function NavBar(){
    return(
        <Slide>
            
        </Slide>

   )
}

export default HomeNav;