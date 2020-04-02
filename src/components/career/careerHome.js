import React from 'react'
import {Switch,Route,HashRouter} from 'react-router-dom'

import CareerNav from './careerNav'
import * as CC from './careerContents'
import Footer from '../common/footer'
import styles from './careerHome.module.css'


export default function CareerHome(props) {

    return (
        <HashRouter hashType="noslash">
            <div className={styles.mainDiv}>   
                <div className={styles.navDiv}>
                   <CareerNav/>
                </div>                                   
                <div className={styles.contentDiv}>
                    <Switch>
                       <Route path="/" exact component={CC.AboutMe} />
                       <Route path="/about-me" component={CC.AboutMe}/>
                       <Route path="/skills" component={CC.Skills}/>
                       <Route path="/projects" component={CC.Projects}/>
                       <Route path="/education" component={CC.Education}/>
                       <Route path="/certifications" component={CC.Certifications}/>
                       <Route path="/experiences" component={CC.Experiences}/>
                       <Route path="/others" component={CC.Others}/>                       
                    </Switch>                
                </div>  
                <div className={styles.footerDiv}>
                    <Footer/>
                </div>            
            </div>
        </HashRouter>
       
        
    )
}

