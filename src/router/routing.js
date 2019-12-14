import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from '../components/home/home'
import MenuRoute from './menuRoute'

export default function Routing() {
    
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/:link">
                    <MenuRoute/>                        
                </Route>                                                      
            </div>
        </BrowserRouter>
    )
    
}
