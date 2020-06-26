import React, { Fragment } from 'react'
import {Route, Switch, Redirect}  from 'react-router-dom'

import styles from "./bioHome.module.css"

import BioBasicInfo from '../basic/bioBasicInfo'
import BioPhotos from '../photos/bioPhotos'
import BioContact from '../contact/bioContact'
import BioAnchor from './bioAnchor'
import Divider from '../../common/divider'


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
                        <Route path={`/bio/info`}><BioBasicInfo/></Route>
                        <Route path={`/bio/photos`}><BioPhotos/></Route> 
                        <Route path={`/bio/contact`}><BioContact/></Route>                                                  
                    </Switch>                  
                </div>                                  
            </Fragment>             
    )
}
