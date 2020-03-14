import React from 'react'

import styles from './careerContents.module.css'

export default Skills;

function AboutMe(){
    return(
        <div class={styles.piledSegment}>
            <h4 class={styles.header}>About Me</h4>
            <p>I am a frontend application developer for both web and mobile app.</p>            
        </div>        
    )
}

function Skills(){
    return(
        <div class={styles.piledSegment}>
            <h4 class={styles.header}>Skills</h4>
            <ul className={styles.skillsList}>
                <li> JavaScript, CSS, SASS</li>
                <li> ReactJS, React Native, React Hooks</li>
                <li> React-router-dom, Material-design, Styled Components</li>
                <li> Webpack, Babel</li>
                <li> Git, Linux, MySql</li>
            </ul>
        </div>     
    )
}

function Projects(){
    return(
        <div>
            <h2>
                All my Projects will be shown here.
            </h2>
            <div>
                
            </div>
        </div>        
    )
}

function Education(){
    return(
        <div>
            <h2>
                Education
            </h2>
            <div>

            </div>
        </div>        
    )
}

function Certifications(){
    return(
        <div>
            <h2>
                Certifications
            </h2>
            <div>

            </div>
        </div>        
    )
}

function Experiences(){
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

function Others(){
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