import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Home from '../home/home'
import Menu from './menu/menu'
import BioHome from '../bio/bioHome'
import BlogHome from '../blog/blogHome'
import CareerHome from '../career/careerHome'
import styles from './routing.module.css'


export default function Routing() {                      

    return (                
            <Router> 
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>  
                    <Route>                                  
                        <Menu/>                                                      
                        <div className={styles.routeDiv} id="main">                          
                            <Switch>
                                <Route path="/blog" component={BlogHome}/>
                                <Route path="/career"><CareerHome/></Route>  
                                <Route path="/bio" component={BioHome}/>                                  
                                <Route> <NotFound/> </Route>
                            </Switch>
                        </div>                                                                                    
                    </Route> 
                </Switch>               
            </Router>                    
    )    
}

const NotFound = (props)=>{            
    return (
        <div className={styles.notFound}>
            <div style={{fontSize:70,fontWeight:'bold'}}>404</div>
            <p style={{marginTop:20}}>page not found</p>
        </div>)
}