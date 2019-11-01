import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faFacebookF,faGithub,faLinkedinIn,faAngellist} from '@fortawesome/free-brands-svg-icons'

const StyledList = styled.ul`      
          font-size:22px;
          display:flex;          
          justify-content:space-evenly;                         
          width:360px; 
          padding-right:40px;     
`

export default function ProfileLinks(props){
    return(
        
        <StyledList>  
            <li style={{listStyleType:'none'}}>
               <a href="https://linkedin.com/in/hmsajal">
                  <FontAwesomeIcon icon={faLinkedinIn} color="#0077b5" />
               </a>                                        
            </li>     

            <li style={{listStyleType:'none'}}>
               <a href={"mailto:sajal.hm@gmail.com"}>
                  <FontAwesomeIcon icon={faEnvelope} color="#d44638"/>
               </a>                                        
            </li>  

            <li style={{listStyleType:'none'}}>
               <a href="https://github.com/hmsajal">
                  <FontAwesomeIcon icon={faGithub} color="#000"/>
               </a>                                        
            </li>  

            <li style={{listStyleType:'none'}}>
               <a href="https://facebook.com/sajal.hm">
                   <FontAwesomeIcon icon={faFacebookF} color="#3b5998"/>  
               </a>                                        
            </li>  

            <li style={{listStyleType:'none'}}>
               <a href="https://angel.co/hmsajal">
                   <FontAwesomeIcon icon={faAngellist} color="#333"/>  
               </a>                                        
            </li>  
            
          
            
             
             
        </StyledList>  
    )
}