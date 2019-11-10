import React from 'react'
import {BrowserRouter,Route,Switch } from 'react-router-dom'

import Bio from '../components/bio/bioHome'
import Blog from '../components/blog/blogHome'
import Home from '../components/home/home'
import Career from '../components/career/careerHome'

function SiteRoute(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/bio" component={Bio}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/career" component={Career}/>
            </Switch>
        </BrowserRouter>
    )
}

export default SiteRoute;