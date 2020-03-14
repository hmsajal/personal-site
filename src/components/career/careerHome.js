import React,{useContext,useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom'

import {store} from '../../store.js'
import CareerNav from './careerNav'
import CareerContents from './careerContents'
import Footer from '../common/footer'
import styles from './careerHome.module.css'


export default function CareerHome(props) {

    const {path} = useRouteMatch()
    const globalState = useContext(store)          
    const {dispatch} = globalState;    
    
    useEffect(()=>{                        
        dispatch({type:'CurrentMenuItemSelection',selectedMenu:path})            
    },[])

    return (
        <div>
            <div>                   
                <CareerNav/>                                                                                      
                <div className={styles.contentDiv}>
                   <CareerContents/>     
                </div>                                                                                        
            </div>
            {/* <Footer/> */}
        </div>
        
    )
}

