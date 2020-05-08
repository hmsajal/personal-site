import React, { Fragment } from 'react'
import {Route, Switch, Redirect}  from 'react-router-dom'

import styles from "./bioHome.module.css"

import BioBasicInfo from './bioBasicInfo'
import BioPhotos from './bioPhotos'
import BioContact from './bioContact'
import BioAnchor from './bioAnchor'
import Divider from '../common/divider'


export default function BioHome(props) {             

    return (          
            <Fragment>  
                <div className={styles.anchorDiv}>
                    <BioAnchor/>  
                </div> 
                {/* <Divider/> */}
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
