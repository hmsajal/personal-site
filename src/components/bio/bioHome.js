import React from 'react'
import {Route, Switch}  from 'react-router-dom'

import styles from "./bioHome.module.css"

import BioBasicInfo from './bioBasicInfo'
import BioPhotos from './bioPhotos'
import BioContact from './bioContact'
import BioAnchor from './bioAnchor'


export default function BioHome(props) {             
    
    return (          
            <div className={styles.main}>  
                <div className={styles.anchorDiv}>
                    <BioAnchor/>  
                </div> 

                <div className={styles.dividerLeft}></div>  
                <div className={styles.dividerRight}></div>                  

                <div className={styles.internalDivs}>       
                    <Switch>                                                     
                        <Route exact path="/bio"><BioBasicInfo/></Route>
                        <Route exact path="/bio/info"><BioBasicInfo/></Route>
                        <Route exact path="/bio/photos"><BioPhotos/></Route> 
                        <Route exact path="/bio/contact"><BioContact/></Route>                                                  
                    </Switch>                  
                </div>                                  
            </div>             
    )
}
