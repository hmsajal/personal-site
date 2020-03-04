import React,{useContext,useEffect,useState} from 'react'
import {useRouteMatch} from 'react-router-dom'

import styles from "./bioHome.module.css"
import Anchor from "./bioAnchor"

import {store} from '../../store.js'
import BioBasicInfo from './bioBasicInfo'
import BioPhotos from './bioPhotos'
import BioContact from './bioContact'


export default function BioHome(props) {                 
    
    const {path} = useRouteMatch()
    const [wheelDir,setWheelDir] = useState(0)
    const globalState = useContext(store)          
    const {dispatch} = globalState;    
    
    useEffect(()=>{                        
        dispatch({type:'CurrentMenuItemSelection',selectedMenu:path})    
                
        window.addEventListener("wheel",handleMouseWheel)                              
        function handleMouseWheel(e){                    
            if(e.deltaY>0){
                setWheelDir(1)
            } 
        
            else if(e.deltaY<0){
                setWheelDir(-1)
            }                                                
        }
        return ()=>window.removeEventListener("wheel",handleMouseWheel)        
    },[])          
    
    return (          
            <div className={styles.main}>  
                <div className={styles.anchorDiv}>
                    <Anchor/>                    
                </div>      
                <div className={styles.dividerDiv}>
                        <div className={styles.divider}></div>
                </div>   
                <div className={styles.internalDivs}>                    
                    <BioBasicInfo wheelDir={wheelDir}/>                       
                    <BioPhotos  wheelDir={wheelDir}/>                
                    <BioContact wheelDir={wheelDir}/>                                                  
                </div>                                  
            </div>
    )
}
