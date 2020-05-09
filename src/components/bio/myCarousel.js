import React,{Fragment} from 'react'

import styles from './myCarousel.module.css'

export default function MyCarousel(){
    return(
        <Fragment>
            <h3 className={styles.header}>
                Photos
            </h3>
            <div>            
                <img className={styles.imgStyle} alt="for testing purpose"
                    src="https://cdn.pixabay.com/photo/2016/08/16/19/09/forest-1598756_960_720.jpg"
                />
            </div>        
        </Fragment>
    )
}