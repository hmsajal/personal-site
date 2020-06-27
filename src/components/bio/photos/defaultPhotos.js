import React from 'react'
import {Link,useRouteMatch} from 'react-router-dom'

import MyCarousel from './myCarousel'
import styles from './photos.module.css'


export default function DefaultPhotos(){    
  
    let {url} = useRouteMatch()    

    return (           
      <div className={styles.main}> 
        <div className={styles.name}>My Photos</div>       
        <div className={styles.text}>
            Here, I have addded photos featuring me. Also there are some photos I found interesting.
             If you are a close friend or someone from my family or relatives, you can
          <Link to={`${url}/auth`}> SIGN IN </Link>to see more photos.
        </div >
        <div className={styles.albums}>
          
        </div>
      </div>                    
    )
}


