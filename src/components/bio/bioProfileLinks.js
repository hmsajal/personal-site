import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faFacebookF,faGithub,faLinkedinIn,faAngellist} from '@fortawesome/free-brands-svg-icons'

import styles from './bioProfileLinks.module.css'


export default function ProfileLinks(props){         
   return(        
        <ul className={styles.unorderedList}>  
            <li className={styles.listItem}>
               <a  href="https://linkedin.com/in/hmsajal">
                  <FontAwesomeIcon color="#0077b5" icon={faLinkedinIn} />
               </a>                                        
            </li>     

            <li className={styles.listItem}>
               <a href={"mailto:sajal.hm@gmail.com"}>
                  <FontAwesomeIcon color="#b23121" icon={faEnvelope} />
               </a>                                        
            </li>  

            <li className={styles.listItem}>
               <a href="https://github.com/hmsajal">
                  <FontAwesomeIcon color="#000" icon={faGithub}/>
               </a>                                        
            </li>  

            <li className={styles.listItem}>
               <a href="https://facebook.com/sajal.hm">
                   <FontAwesomeIcon color="#35609f" icon={faFacebookF}/>  
               </a>                                        
            </li>  

            <li className={styles.listItem}>
               <a href="https://angel.co/hmsajal">
                   <FontAwesomeIcon color="#272727" icon={faAngellist} />  
               </a>                                        
            </li>       
        </ul>  
    )
}