import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faFacebookF,faGithub,faLinkedinIn,faAngellist} from '@fortawesome/free-brands-svg-icons'

import styles from './profileLinks.module.css'




export default function ProfileLinks(props){

   function changeIconState(val){
      
      if(props.icolor!=="gray"){
         return val;
      }    
   }

   return(        
        <ul className={styles.list} style={{fontSize:props.iconSize,width:props.width}}>                                    
            <li style={{listStyleType:'none'}}>
               <a href="https://linkedin.com/in/hmsajal" style={{color:changeIconState("#0077b5")}}>
                  <FontAwesomeIcon  icon={faLinkedinIn}/>
               </a>                                        
            </li>     

            <li style={{listStyleType:'none'}}>
               <a href={"mailto:sajal.hm@gmail.com"} style={{color:changeIconState("#b23121")}}>
                  <FontAwesomeIcon icon={faEnvelope}/>
               </a>                                        
            </li>  

            <li style={{listStyleType:'none'}}>
               <a href="https://github.com/hmsajal" style={{color:changeIconState("#222")}}>
                  <FontAwesomeIcon icon={faGithub}/>
               </a>                                        
            </li>  

            <li style={{listStyleType:'none'}}>
               <a href="https://facebook.com/sajal.hm" style={{color:changeIconState("#305d99")}}>
                   <FontAwesomeIcon icon={faFacebookF}/>  
               </a>                                        
            </li>  

            <li style={{listStyleType:'none'}}>
               <a href="https://angel.co/hmsajal" style={{color:changeIconState("#333")}}>
                   <FontAwesomeIcon icon={faAngellist}/>  
               </a>                                        
            </li>       
        </ul>  
    )
}