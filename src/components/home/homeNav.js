import React from 'react'
import styled from 'styled-components'
import {BrowserRouter,NavLink} from 'react-router-dom'

const NavMenu = styled.nav`
      width:30%;
      height:50px;
      display:flex;
      justify-content:space-evenly;
      align-items:center;      
`
const MyName = styled.span`
      font-size:28px;
      font-family:sans-serif;
      color:'#69bf8d';
      font-weight:bold;     
      width:30%;
      padding:20px 0px 0px 70px;       
`
const Div = styled.div`
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:100%;
      
      
`

function HomeNav() {
    return (
        <Div>            
            <MyName>Hasan Mahmud</MyName>
            <NavMenu>            
                <NavLink to="/bio" style={{color:'black',fontSize:17}}>
                    Bio
                </NavLink>

                <NavLink to="/blog" style={{color:'black',fontSize:17}}>
                    Blog
                </NavLink>

                <NavLink to="/" style={{color:'black',fontSize:17}}>
                    others
                </NavLink>
            </NavMenu>
        </Div>
        
    )
}

export default HomeNav;
