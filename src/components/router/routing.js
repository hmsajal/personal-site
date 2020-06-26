import React from 'react'
import {BrowserRouter as Router,Route,Switch,useLocation, useHistory} from 'react-router-dom'

import Home from '../home/home'
import Menu from '../menu/menu'
import BioHome from '../bio/main/bioHome'
import BlogHome from '../blog/blogHome'
import CareerHome from '../career/careerHome'
import NotFound from './notFound'
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
                        <DoRoute/>                                                                                   
                    </Route> 
                </Switch>               
            </Router>                    
    )    
}


const DoRoute = ()=>{
    
    let history =useHistory()
    
    React.useEffect(()=>{
        if(history.action==="PUSH"){
            window.scrollTo(0,0)
        }
    },[history.location.key])


    return(
        <div className={styles.routeDiv} id="main">                          
            <Switch>                                                                
                <Route path="/bio" component={BioHome}></Route>   
                <Route path="/career" component={CareerHome}></Route> 
                <Route path="/blog" component={BlogHome}></Route>                                                                
                <Route> <NotFound/> </Route>
            </Switch>
        </div> 
    )
}