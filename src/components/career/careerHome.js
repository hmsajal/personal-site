import React from 'react'
import {Switch,Route} from 'react-router-dom'

import CareerNav from './careerNav'
import {AboutMe,Skills} from './careerContents'
import Footer from '../common/footer'
import styles from './careerHome.module.css'


export default function CareerHome(props) {

    return (
        <div className={styles.mainDiv}>   
            <div className={styles.navDiv}>
               <CareerNav/>
            </div>                                   
            <div className={styles.contentDiv}>
                <Switch>
                   <Route path="" component={AboutMe}/>
                   <Route path="" component={Skills}/>
                </Switch>                
            </div>  
            {/* <div className={styles.footerDiv}>
                <Footer/>
            </div>             */}
        </div>
        
    )
}

