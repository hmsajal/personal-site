import React, { Fragment } from 'react'
import {Route, Switch, Redirect}  from 'react-router-dom'

import styles from "./bioHome.module.css"

import BioBasicInfo from './bioBasicInfo'
import BioPhotos from './bioPhotos'
import BioContact from './bioContact'
import BioAnchor from './bioAnchor'


export default function BioHome(props) {             

    return (          
            <Fragment>  
                <div className={styles.anchorDiv}>
                    <BioAnchor/>  
                </div> 

                {/* <div className={dividerStyles.dividerLeft}></div>  
                <div className={dividerStyles.dividerRight}></div>                   */}

                <div className={styles.internalDivs}>       
                    <Switch>                          
                        <Redirect exact from={`/bio`} to="/bio/info"/>                                                                                                   
                        <Route exact path={`/bio/info`}><BioBasicInfo/></Route>
                        <Route exact path={`/bio/photos`}><BioPhotos/></Route> 
                        <Route exact path={`/bio/contact`}><BioContact/></Route>                                                  
                    </Switch>                  
                </div>                                  
            </Fragment>             
    )
}
