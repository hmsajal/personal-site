import React from 'react'
import Cookies from 'js-cookie'
import {Switch,Route,Redirect} from 'react-router-dom'

import DefaultPhotos from './defaultPhotos'
import AllPhotos from './allPhotos'
import Auth from './photoAuth'
    

export default function BioPhotos() {              

  return (                                      
        <Switch>                     
            <Route exact path="/bio/photos">
                    {Cookies.get('hms')  ?  <AllPhotos/>  :  <DefaultPhotos/>}
            </Route>                                           
            <Route exact path="/bio/photos/auth" component={Auth}/>                                         
        </Switch>                                                                            
    )
}


