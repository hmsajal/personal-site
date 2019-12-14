import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


const Div =  styled.div`
      display:flex;
      flex-direction:column;
      width:330px;                  
      padding:25px 15px 100px 15px;
      margin-right:40px;
      background:#d0f0c0;  
      background:linear-gradient(to bottom,#60a677,#a5d6a7,#d0f0c0);
      border-radius:6px 6px 0px 0px;            
      @media screen and (max-width:1024px) {
          width:100%;
      }
`

const StyledNavLink = styled(NavLink)`      
      font-size:22px;      
      font-family:squada one;      
      background:#ceb;
      color:#555;
      margin:4px 0px;      
      padding:4px 12px;  
      border-radius:1px;  
      
      :hover{
          color:#111;
          background:#cea;  
          text-decoration:underline;              
          height:60px;   
      }
`

export default function CareerNav() {
    return (
        <Div>    
            <StyledNavLink to="aboutMe">
                About Me
            </StyledNavLink>  

            <StyledNavLink to="skills">
                Skills                  
            </StyledNavLink>                                 
            
            <StyledNavLink to="/">
                Projects                               
            </StyledNavLink>  
            
            <StyledNavLink to="/">
                Education               
            </StyledNavLink> 

            <StyledNavLink to="/">
                Certifications              
            </StyledNavLink>   
            
            <StyledNavLink to="/">
                Experiences                 
            </StyledNavLink>      

            <StyledNavLink to="/">
                Others                
            </StyledNavLink>                                         
        </Div>
    )
}
