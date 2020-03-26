import React from 'react'
import {BrowserRouter as Router,Route, Switch, Link, useRouteMatch} from 'react-router-dom'

import Home from '../home/home'
import Menu from './menu/menu'
import BioHome from '../bio/bioHome'
import BlogHome from '../blog/blogHome'
import CareerHome from '../career/careerHome'


export default function Routing() {    
    
    return (        
        <div>
            <Router>                
                    <Menu/>                                                      
                    <div style={{position:'relative',top:'11vh'}}>                          
                        <Route path="/blog" component={BlogHome}/>
                        <Route path="/career" component={CareerHome}/>  
                        <Route path="/bio" component={BioHome}/>                             
                    </div>                                                    
            </Router>            
        </div>
    )
    
}
