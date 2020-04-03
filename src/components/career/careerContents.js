import React from 'react'

import styles from './careerContents.module.css'


export function AboutMe(){
    return(
        <div className="ui">
            <div className={styles.header}>            
               About Me
            </div>            
            <div className={styles.aboutMeContent}>               
                 I am a front-end app developer. 
                 I develop web and mobile applications with React JS and React Native. 
                 I believe in evolving through learning. 
                 I want to see myself as one of the top developers of the country in the coming years and 
                 I believe that taking responsibilities of what I do as a developer  is the best way to achieve that.               
            </div>            
        </div>        
    )
}

export function Skills(){
    return(
        <div className="ui">            
            <div className={styles.header}>            
               Skills
            </div>
            <div className={styles.skillsContent}>
                <div className="item"> JavaScript, CSS, SASS</div>
                <div className="item"> ReactJS, React Native, React Hooks</div>
                <div className="item"> React-router-dom, Material-design, Styled Components</div>
                <div className="item"> Webpack, Babel</div>
                <div className="item"> Git, Linux, MySql</div>
            </div>
        </div>     
    )
}

export function Projects(){
    return(
        <div className="ui">                        
            <div className={styles.header}>            
               Projects               
            </div>                   
            <div className="ui items content">                
                <div className={styles.proItem}>
                    <div>Labaid Lifeplus</div> 
                    <div>                                                                   
                        For Durbin Labs I built the UIs of Lifeplus, Labaid’s healthcare app.
                        <br/><a href="https://www.durbinlabs.com/project-details.php?id=9">Project Info</a>                        
                    </div>                    
                </div>                  
                <div className={styles.proItem}>
                    <div>Playstore App</div> 
                    <div> 
                          I built an android application with React Native framework and uploaded it in google playstore.
                          It's a simple but useful personal assistant app for help with breathing exercise.
                          <br/><a href="https://play.google.com/store/apps/details?id=com.happybreathing">Playstore App Link</a>                        
                    </div>
                </div> 
                <div className={styles.proItem}>
                    <div>Portfolio Site</div> 
                    <div>                         
                        And I cannot but mention this portfolio website which you are browsing now. It was built all by myself with ReactJS of course. 
                        I used <span>React-router-dom</span>,<span> semantic-ui</span>,<span> css-modules</span> and more libraries, <span> React Hooks</span> for state management and 
                        <span> webpack</span> for bundling. It was deployed in <span>github pages</span> what you might have noticed already.                        
                    </div>
                </div>                
            </div>
        </div>          
    )
}

export function Education(){
    return(
        <div className="ui">                        
            <div className={styles.header}>            
               Education              
            </div>                   
            <div className="ui content items">                
                <div className={styles.proItem}>
                    <div>Graduate</div> 
                    <div>     
                         MSC in Informatin Technology
                         <br/>Jahangirnagar University, Dhaka  
                         <br/>2016-'17                                                                                                    
                    </div>                    
                </div>                  
                <div className={styles.proItem}>
                    <div>Undergraduate</div> 
                    <div>     
                         BSC in Informatin Technology
                         <br/>Jahangirnagar University, Dhaka  
                         <br/>2011-'15                                                                                                    
                    </div>    
                </div> 
                <div className={styles.proItem}>
                    <div>HSC</div> 
                    <div>  
                         Dhaka College
                         <br/>Science --- 2010                                                                                                             
                    </div>  
                </div>           
                <div className={styles.proItem}>
                    <div>SSC</div> 
                    <div>  
                         Idal Schoold and College
                         <br/>Science --- 2008                                                                                                             
                    </div>  
                </div>      
            </div>
        </div>         
    )
}

export function Certifications(){
    return(
        <div className="ui">                        
            <div className={styles.header}>            
            Certifications            
            </div>   

            <div className="ui content list">     
               <div className={styles.certItem}>                                      
                   <div className="ui">
                       <i className="tiny circle icon middle aligned"></i> 
                       <a className="content middle aligned" href="https://www.freecodecamp.org/certification/hmsajal/javascript-algorithmsand-data-structures">                          
                         FreeCodeCamp JavaScript Algorithms and Data structures 300 hours coursework.
                       </a>
                   </div>
               </div>
            </div>

            <div className="ui content list">     
               <div className={styles.certItem}>                                      
                   <div className="ui">
                       <i className="tiny circle icon middle aligned"></i> 
                       <a className="content middle aligned" href="">                          
                         
                       </a>
                   </div>
               </div>
            </div>

            <div className="ui content list">     
               <div className={styles.certItem}>                                      
                   <div className="ui">
                       <i className="tiny circle icon middle aligned"></i> 
                       <a className="content middle aligned" href="">                          
                         
                       </a>
                   </div>
               </div>
            </div>

        </div>     
    )
}

export function Experiences(){
    return(
        <div>
            <h2>
                Experiences
            </h2>
            <div>

            </div>
        </div>        
    )
}

export function Others(){
    return(
        <div>
            <h2>
                Others
            </h2>
            <div>

            </div>
        </div>        
    )
}