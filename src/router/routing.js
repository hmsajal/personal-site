import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../components/home/home'
import MenuRoute from './menuRoute'

export default function Routing() {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path='/:link'>
                    <MenuRoute/>                        
                </Route>                                                      
            </Switch>
        </BrowserRouter>
    )
    
}
