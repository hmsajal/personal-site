import React,{Fragment} from 'react'
import {Route} from 'react-router-dom'

import styles from './bioPhotos.module.css'

let passed = false;

export default function BioPhotos() {    
    return (         
        <div id="bioPhotos" className={styles.main}>                        
           {passed ? <MyCarousel/> : <Auth/>}
        </div>               
    )
}


function MyCarousel(){
    return(
        <div>            
            <img className={styles.imgStyle} alt="for testing purpose"
                 src="https://cdn.pixabay.com/photo/2016/08/16/19/09/forest-1598756_960_720.jpg"
            />
        </div>        
    )
}

function Auth(){
    return(
        <Fragment>
            <h3 className={styles.header}>
                    My Photos
            </h3>
            <div className={styles.authIntro}>
                My photos also include my friends and family. So those are not open to all. 
                <br/>Just prove that I've let you go through.
            </div>
            <div className={styles.formDiv}>
                <div className="ui form" style={{width:200}}>
                    <div className="ui field" >
                        <label>Write down your nickname</label>
                        <input type="text" />
                    </div>        
                                        
                    <div className="ui field">
                        <label>And the short code given by me for this purpose</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.buttonDiv}>
                        <button className="ui submit button large">
                            Submit
                        </button>     
                    </div>                                                                           
                </div>      
            </div>                            
        </Fragment>        
    )
}