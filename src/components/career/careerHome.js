import React,{useContext,useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom'

import {store} from '../../store.js'
import CareerNav from './careerNav'
import CareerContent from './careerContent'
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
        <div className={styles.outerDiv}>
            <div className={styles.career}> 
                <CareerNav/>               
                <CareerContent />                                                                 
            </div>
            <Footer/>
        </div>
        
    )
}

