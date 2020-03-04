import React from 'react'
import {Empty} from 'antd'

import styles from './bioPhotos.module.css'


export default function BioPhotos() {
    return (
        <div id="bioPhotos" className={styles.main}>
            <div>
                <h3>
                    My Photos
                </h3>
            </div>
            <div className={styles.empty}>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="no photos yet" 
                            style={{background:'#f2f2f2',height:'70%',width:'70%',display:'flex',
                                    justifyContent:'center',alignItems:'center'}}
                />
            </div>
        </div>
    )
}
