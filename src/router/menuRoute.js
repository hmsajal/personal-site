import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

import Menu from '../components/common/menu'
import BioHome from '../components/bio/bioHome'
import BlogHome from '../components/blog/blogHome'
import CareerHome from '../components/career/careerHome'

const MenuDiv = styled.div`
      position:fixed;
      z-index:1;
      width:100%;
      top:0px;      
      transition:top .3s;
`
const Div = styled.div`
      position:relative;
`

export default function MenuRoute(){           
        
    return(
        <Router>            
            <div>                  
                <MenuDiv id="menu">                                                
                    <Menu/>                                
                </MenuDiv>            
                <Div id = "notMenu" style={{top:window.innerHeight*.12}}>
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
                </Div>
            </div>
        </Router>        
    )
}

