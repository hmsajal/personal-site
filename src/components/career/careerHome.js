import React from 'react'
import {Switch,Route,HashRouter} from 'react-router-dom'

import CareerNav from './careerNav'
import * as CC from './careerContents'
import Footer from '../common/footer'
import styles from './careerHome.module.css'


export default function CareerHome(props) {      

    React.useEffect(()=>{
        document.getElementById("menu").style.top = (props.direction>0 ? '-11vh' :'0vh')
        document.getElementById("main").style.top = (props.direction>0 ? '0vh' :'11vh')
        document.getElementById("careerFooter").style.bottom = (props.direction>0 ? '0vh' :'-14vh')                
    },[props.direction])                   

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
                <div className={styles.footerDiv} id="careerFooter">
                    <Footer/>
                </div>            
            </div>
        </HashRouter>
       
        
    )
}

