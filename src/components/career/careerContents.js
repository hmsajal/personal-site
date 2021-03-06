import React from 'react'

import styles from './careerContents.module.css'


export function AboutMe() {
    return (
        <div className="ui">
            <div className={styles.header}>
                About Me
            </div>
            <div className={styles.aboutMeContent}>
                I am a front-end app developer.
                I develop web and mobile applications with React JS and React Native.
                I believe in evolving through learning.
                I want to see myself as one of the top developers of the country
                in the coming years and I believe that taking responsibilities of
                what I do as a developer  is the best way to achieve that.
            </div>
        </div>
    )
}

export function Skills() {
    return (
        <div className="ui">
            <div className={styles.header}>
                Skills
            </div>
            <div className={styles.skillsContent}>
                <div className="item" style={{ padding: '10px 0px' }}>
                    <span style={{ fontWeight: 'bold', color: 'teal', marginRight: 10 }}>Primary Languages and Frameworks: </span>
                       JavaScript, ReactJS, React Native
                </div>
                <div className="item" style={{ padding: '10px 0px' }}>
                    <span style={{ fontWeight: 'bold', color: 'teal', marginRight: 10 }}>React Tools and Libraries: </span>
                     React Hooks, React-router, Material-design
                </div>
                <div className="item" style={{ padding: '10px 0px' }}>
                    <span style={{ fontWeight: 'bold', color: 'teal', marginRight: 10 }}>CSS Slills: </span>
                     CSS3, SASS, CSS Modules, CSS in JS, Autoprefixer, Styled Components
                </div>
                <div className="item" style={{ padding: '10px 0px' }}>
                    <span style={{ fontWeight: 'bold', color: 'teal', marginRight: 10 }}>Bundling and Environment: </span>
                     Webpack, Babel
                </div>
                <div className="item" style={{ padding: '10px 0px' }}>
                    <span style={{ fontWeight: 'bold', color: 'teal', marginRight: 10 }}>Data and Security: </span>
                     Rest API, MySql, Firebase, Auth0
                </div>
                <div className="item" style={{ padding: '10px 0px' }}>
                    <span style={{ fontWeight: 'bold', color: 'teal', marginRight: 10 }}>VCS and others </span>
                     Git, Linux, OOP
                </div>
            </div>
        </div>
    )
}

export function Projects() {
    return (
        <div className="ui">
            <div className={styles.header}>
                Projects
            </div>
            <div className="ui items content">
                <div className={styles.proItem}>
                    <div>Labaid Lifeplus</div>
                    <div>
                        While working in Durbin Labs I worked in the development of 'Lifeplus',
                        Labaid's all-inclusive healthcare app.
                        <br /><a target="_blank" href="https://www.durbinlabs.com/project-details.php?id=9">Project Info</a>
                    </div>
                </div>
                <div className={styles.proItem}>
                    <div>Playstore App</div>
                    <div>
                        I have an app uploaded in Google Playstore which I developed with React Native.
                        It's a useful personal assistant app for helping people with breathing exercise.
                          <br /><a target="_blank" href="https://play.google.com/store/apps/details?id=com.happybreathing">Playstore App Link</a>
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

export function Education() {
    return (
        <div className="ui">
            <div className={styles.header}>
                Education
            </div>
            <div className="ui content items">
                <div className={styles.eduItem}>
                    <div>Graduate</div>
                    <div>
                        <div>MSC in Information Technology</div>
                        <div>Jahangirnagar University, Dhaka</div>
                        <div>2016-'17</div>
                    </div>
                </div>
                <div className={styles.eduItem}>
                    <div>Undergraduate</div>
                    <div>
                        <div>BSC in Information Technology</div>
                        <div>Jahangirnagar University, Dhaka </div>
                        <div>2011-'15</div>
                    </div>
                </div>
                <div className={styles.eduItem}>
                    <div>HSC</div>
                    <div>
                        <div>Dhaka College</div>
                        <div>Science - 2010</div>
                    </div>
                </div>
                <div className={styles.eduItem}>
                    <div>SSC</div>
                    <div>
                        <div>Ideal Schoold and College</div>
                        <div>Science - 2008</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Certifications() {
    return (
        <div className="ui">
            <div className={styles.header}>
                Certifications
            </div>

            <div className="ui content list">
                <div className={styles.certItem}>
                    <div className="ui">
                        <i className="tiny circle icon middle aligned black"></i>
                        <a className="content middle aligned" target="_blank" href="https://www.freecodecamp.org/certification/hmsajal/javascript-algorithms-and-data-structures">
                            FreeCodeCamp JavaScript Algorithms and Data structures 300 hours coursework.
                       </a>
                    </div>
                </div>
            </div>

            <div className="ui content list">
                <div className={styles.certItem}>
                    <div className="ui">
                        <i className="tiny circle icon middle aligned black"></i>
                        <a className="content middle aligned" target="_blank" href="https://www.coursera.org/account/accomplishments/verify/H2PBEAA5Q57P">
                            Introduction to CSS3 in Coursera.
                       </a>
                    </div>
                </div>
            </div>

            <div className="ui content list">
                <div className={styles.certItem}>
                    <div className="ui">
                        <i className="tiny circle icon middle aligned black"></i>
                        <a className="content middle aligned" target="_blank" href="https://www.coursera.org/account/accomplishments/verify/9BVM6PRHN3RA">
                            Network Protocols and Architecture by CISCO in Coursera.
                       </a>
                    </div>
                </div>
            </div>

            <div className="ui content list">
                <div className={styles.certItem}>
                    <div className="ui">
                        <i className="tiny circle icon middle aligned black"></i>
                        <a className="content middle aligned" target="_blank" href="https://app.pluralsight.com/library/courses/javascript-objects-prototypes/table-of-contents">
                            JavaScript Objects and Prototypes in Pluralsight.
                       </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export function Experiences() {
    return (
        <div className="ui">
            <div className={styles.header}>
                Experiences
            </div>
            <div className="ui items content">
                <div className={styles.expItem}>
                    <div className={styles.expItemHeader}>
                        <div className="item">Durbin Labs Limited</div>
                        <div className="item">Software Engineer</div>
                        <div className="item">Dec '18 – May '19</div>
                    </div>
                    <div className={styles.expItemContent}>
                        <div className="item">Built responsive and interactive app UIs with React Native.</div>
                        <div className="item">Maintained Scrum methodology for project management.</div>
                        <div className="item">Used git for version cortrol system.</div>
                    </div>
                </div>

                <div className={styles.expItem}>
                    <div className={styles.expItemHeader}>
                        <div className="item">Flux IT Limited</div>
                        <div className="item">Junior Software Engineer</div>
                        <div className="item">Jun '18 – Nov '18</div>
                    </div>
                    <div className={styles.expItemContent}>
                        <div className="item">Built Android application UIs with React Native</div>
                        <div className="item">Developing Application with JavaScript and JavaScript framewoks </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Others() {
    return (
        <div className="ui">
            <div className="ui center aligned large header">Resume</div>
            <div className="ui content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p className={styles.resumePara}>And if you are a recruiter and want to see my information in the format of a resume,
                here is the link of the .pdf file.
                </p>
                <a target="_blank" href="https://drive.google.com/open?id=1v3dIDjUZJU71NKE9pJN4nKz9ALqAC7_A" style={{ fontSize: 24, color: '#46b' }}>
                    Hasan-Mahmud-Resume
                </a>
            </div>
        </div>
    )
}