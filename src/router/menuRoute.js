import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

import Menu from '../components/common/menu'
import BioHome from '../components/bio/bioHome'
import BlogHome from '../components/blog/blogHome'
import CareerHome from '../components/career/careerHome'


export default function MenuRoute(){   
     
    return(
        <Router>
            <div>    
                <div>
                    <Menu/>                                
                </div>            
                
                <Switch>
                    <Route path="/bio">
                        <BioHome/>
                    </Route>
                    <Route path="/blog">
                        <BlogHome/>
                    </Route> 
                    <Route path="/career">
                        <CareerHome/>
                    </Route>                  
                </Switch>
            </div>
        </Router>        
    )
}

