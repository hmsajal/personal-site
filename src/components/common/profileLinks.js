import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faFacebookF,faGithub,faLinkedinIn,faAngellist} from '@fortawesome/free-brands-svg-icons'


const StyledList = styled.ul`                
          display:flex;          
          justify-content:space-between;             
          padding:3px 55px;             
          background:${(props)=>props.backColor};         
   #in:hover{
      color:#226088;
   };
   #mail:hover{
      color:#883121;
   };
   #git:hover{
      color:#000; 
   }; 
   #fb:hover{
      color:#359;
   };
   #angel:hover{
      color:#222;
   }; 
`
const A = styled.a`            
   color: ${props=>props.colored=="colorful" ? props.iColor : '#494949'};             
`

export default function ProfileLinks(props){         
   return(        
        <StyledList backColor={props.backColor} style={{fontSize:props.iconSize,width:props.width}}>  
            <li style={{listStyleType:'none'}}>
               <A colored={props.colorful} iColor="#0077b5" href="https://linkedin.com/in/hmsajal" id="in">
                  <FontAwesomeIcon icon={faLinkedinIn} />
               </A>                                        
            </li>     

            <li style={{listStyleType:'none'}}>
               <A colored={props.colorful} iColor="#b23121" href={"mailto:sajal.hm@gmail.com"} id="mail">
                  <FontAwesomeIcon icon={faEnvelope} />
               </A>                                        
            </li>  

            <li style={{listStyleType:'none'}}>
               <A colored={props.colorful} iColor="#000" href="https://github.com/hmsajal" id="git">
                  <FontAwesomeIcon icon={faGithub}/>
               </A>                                        
            </li>  

            <li style={{listStyleType:'none'}}>
               <A colored={props.colorful} iColor="#35609f" href="https://facebook.com/sajal.hm" id='fb'>
                   <FontAwesomeIcon icon={faFacebookF}/>  
               </A>                                        
            </li>  

            <li style={{listStyleType:'none'}}>
               <A colored={props.colorful} iColor="#272727" href="https://angel.co/hmsajal" id='angel'>
                   <FontAwesomeIcon icon={faAngellist} />  
               </A>                                        
            </li>       
        </StyledList>  
    )
}