import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route,useParams,useRouteMatch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

import Menu from '../components/common/menu'
import Home from '../components/home/home'
import BioHome from '../components/bio/bioHome'
import BlogHome from '../components/blog/blogHome'
import CareerHome from '../components/career/careerHome'

const theme = {
    currentItemRoute: '/bio',    
    currentItemColor:'#001b64bb',
    otherItemsColor:'#fdfdfd'
}

export default function Routing() {
    var extensionPath;
    return (
        <Router>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/site/:{extensionPath}" component={MyComponent}/>                                
            </div>
        </Router>
    )
}

export function MyComponent(){   
         
    return(
        <Router>
            <div>
                <ThemeProvider theme={theme}>
                        <Menu    scaleOfHundredHeight={11} colorBack="#60a677"
                                    routeProp1={{link:'/bio',name:'About Me'}}
                                    routeProp2={{link:'/blog',name:'Blog'}}
                                    routeProp3={{link:'/career',name:'Career and Crafts'}}  
                                    routeProp4={{}}
                        />                                
                </ThemeProvider>
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