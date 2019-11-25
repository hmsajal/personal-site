import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route,useParams,useRouteMatch} from 'react-router-dom'

import Menu from '../components/common/menu'
import Home from '../components/home/home'
import Bio from '../components/bio/bioHome'
import Blog from '../components/blog/blogHome'
import Career from '../components/career/careerHome'

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/site" component={MyComponent}/>
            </Switch>
        </Router>
    )
}
const url = "/site"
export function MyComponent(){    
    const {routeTo} = useParams;
    console.log(routeTo);
    return(
        <Router>
            <Switch>
                <Route path="${url}/:routeTo" component={Bio}/>
                <Route path="${url}/:routeTo" component={Blog}/>
                <Route path="${url}/:routeTo" component={Career}/>
            </Switch>
        </Router>
    )
}
