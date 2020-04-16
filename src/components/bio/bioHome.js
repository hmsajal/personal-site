import React, { Fragment } from 'react'
import {Route, Switch,useRouteMatch}  from 'react-router-dom'

import styles from "./bioHome.module.css"

import BioBasicInfo from './bioBasicInfo'
import BioPhotos from './bioPhotos'
import BioContact from './bioContact'
import BioAnchor from './bioAnchor'


export default function BioHome(props) {             
    
    let {path} = useRouteMatch()    

    return (          
            <Fragment>  
                <div className={styles.anchorDiv}>
                    <BioAnchor/>  
                </div> 

                {/* <div className={dividerStyles.dividerLeft}></div>  
                <div className={dividerStyles.dividerRight}></div>                   */}

                <div className={styles.internalDivs}>       
                    <Switch>                                                     
                        <Route exact path={path}><BioBasicInfo/></Route>
                        <Route exact path={`${path}/info`}><BioBasicInfo/></Route>
                        <Route exact path={`${path}/photos`}><BioPhotos/></Route> 
                        <Route exact path={`${path}/contact`}><BioContact/></Route>                                                  
                    </Switch>                  
                </div>                                  
            </Fragment>             
    )
}
