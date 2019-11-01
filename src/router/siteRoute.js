import React from 'react'
import {BrowserRouter,Route,Switch } from 'react-router-dom'

import Bio from '../components/bio/bio'
import BlogHome from '../components/blog/blogHome'
import Home from '../components/home/home'

function SiteRoute(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/bio" component={Bio}/>
                <Route path="/blog" component={BlogHome}/>
            </Switch>
        </BrowserRouter>
    )
}

export default SiteRoute;