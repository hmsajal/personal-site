import React from 'react'
import styled from 'styled-components'


const Div =  styled.div`
      display:flex;
      flex-direction:column;
      width:320px;                  
      padding:18px 16px 100px 16px;
      margin-right:40px;
      background:#d0f0c0;  
      background:linear-gradient(to bottom,#60a677,#a5d6a7,#d0f0c0);
      border-radius:6px 6px 0px 0px;            
      @media screen and (max-width:1024px) {
          width:100%;
      }
`

const StyledNavLink = styled.a`      
      display:flex;
      align-items:center;
      font-size:22px;      
      font-family:squada one;      
      background:#ceb;
      color:#557;
      height:38px;
      margin:5px 0px;      
      padding:4px 12px;  
      border-radius:1px;  
      transition:all .2s;
      
      :hover{
          color:#333;                    
          transform: scale(1.012,1.1)
      }
`

export default function CareerNav() {
    return (
        <Div>    
            <StyledNavLink href="#career-about-me">
                About Me
            </StyledNavLink>  

            <StyledNavLink href="#career-skills">
                Skills                  
            </StyledNavLink>                                 
            
            <StyledNavLink href="#career-projects">
                Projects                               
            </StyledNavLink>  
            
            <StyledNavLink href="#career-education">
                Education               
            </StyledNavLink> 

            <StyledNavLink href="#career-certifications">
                Certifications              
            </StyledNavLink>   
            
            <StyledNavLink href="#career-experiences">
                Experiences                 
            </StyledNavLink>      

            <StyledNavLink href="#career-others">
                Others                
            </StyledNavLink>                                         
        </Div>
    )
}
