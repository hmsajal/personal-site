import React,{useContext,useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom'

import {store} from '../../store.js'
import BlogContent from './blogContent'

export default function BlogHome(props){    
    const {path} = useRouteMatch()
    const globalState = useContext(store)          
    const {dispatch} = globalState;    
    
    useEffect(()=>{                        
        dispatch({type:'CurrentMenuItemSelection',payload:path})            
    },[])
     
        return(
            <div style={{display:'flex',flexDirection:'column'}}>                                         
                <BlogContent/>                                                                       
            </div>
        )    
}