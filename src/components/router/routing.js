import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Home from '../home/home'
import Menu from './menu/menu'
import BioHome from '../bio/bioHome'
import BlogHome from '../blog/blogHome'
import CareerHome from '../career/careerHome'
import styles from './routing.module.css'


export default function Routing() {           

    let [state,setState] = React.useState(0)

    function handleScroll (val){                      
        val>0 ? setState(1) : setState(-1)                    
    }        

    return (        
        <div onWheel={(event)=>{handleScroll(event.deltaY)}}>
            <Router> 
                <Route exact path="/">
                    <Home/>
                </Route>       

                <Route path="/:slug">
                  <div>
                    <Menu/>                                                      
                    <div className={styles.routeDiv} id="main">                          
                        <Route path="/blog" component={BlogHome}/>
                        <Route path="/career"><CareerHome direction={state}/></Route>  
                        <Route path="/bio" component={BioHome}/>                             
                    </div>                                                    
                  </div>
                </Route>
            </Router>            
        </div>
    )
    
}
