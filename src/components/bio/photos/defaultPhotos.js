import React from 'react'
import {Link,useRouteMatch} from 'react-router-dom'

import MyCarousel from './myCarousel'


export default function DefaultPhotos(){    
  
    let {url} = useRouteMatch()    

    return (           
      <div>        
        <div>
          Here I have added not only those photos which feature me but also the photos which got my
           attention. If you are a close friend or someone from my family and relatives, you can
           <Link to={`${url}/auth`}> SIGN IN </Link>to see more photos.
        </div>
        <div>
          {/* <MyCarousel/> */}
        </div>
      </div>                    
    )
}


