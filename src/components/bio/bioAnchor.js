import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faFacebookF,faGithub,faLinkedinIn,faAngellist} from '@fortawesome/free-brands-svg-icons'

import styles from './bioAnchor.module.css'

function BioAnchor() {
    return(        
        <div className={styles.outerDiv}>              
               <a>
                  <FontAwesomeIcon icon={faLinkedinIn} />
               </a>                                                       

               <a>
                  <FontAwesomeIcon icon={faEnvelope} />
               </a>                                                                  
               
               <a>
                  <FontAwesomeIcon icon={faGithub}/>
               </a>                                        
                          
               <a>
                   <FontAwesomeIcon icon={faFacebookF}/>  
               </a>                                        
                          
               <a>
                   <FontAwesomeIcon icon={faAngellist} />  
               </a>                                                           
        </div>  
    )
}

export default BioAnchor
 