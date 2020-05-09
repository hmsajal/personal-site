import React from 'react'
import Cookies from 'js-cookie'
import {Route,Redirect} from 'react-router-dom'

import MyCarousel from './myCarousel'
import PhotoAuth from './photoAuth'


export default function BioPhotos() {                   
    return (           
        <div id="bioPhotos" style={{display:"flex",flexDirection:'column'}}>                        
          {          
            Cookies.get("hms") ?                  
                         <MyCarousel/>
                               :
                         <PhotoAuth/>
          }
        </div>             
    )
}


