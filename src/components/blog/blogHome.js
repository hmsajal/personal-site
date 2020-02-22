import React,{useContext,useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom'

import {store} from '../../store.js'
import BlogContent from './blogContent'
import Footer from '../common/footer'
import styles from './blogHome.module.css'

export default function BlogHome(props){    
    const {path} = useRouteMatch()
    const globalState = useContext(store)          
    const {dispatch} = globalState;    
    
    useEffect(()=>{                        
        dispatch({type:'CurrentMenuItemSelection',selectedMenu:path})            
    },[])
     
        return(
            <div>
                <div className={styles.main}>                                         
                    <BlogContent/>                                                                                
                </div>
                <Footer/>           
            </div>
            
        )    
}