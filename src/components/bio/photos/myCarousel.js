import React from 'react'

import styles from './myCarousel.module.css'


export default function MyCarousel() {
    return (
      <div className={styles.main}>
        
        <div className={styles.view}>
          <div className={styles.leftCntrl}>
            <i className="fas fa-arrow-right" aria-hidden="true"/>
          </div>
          <div className={styles.imgDiv}>
              
          </div>
          <div className={styles.rightCntrl}>

          </div>
        </div>

        <div className={styles.preview}></div>
      </div>
    )
}
