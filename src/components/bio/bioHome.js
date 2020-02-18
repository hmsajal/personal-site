import React,{useContext,useEffect,useState} from 'react'
import {useRouteMatch} from 'react-router-dom'

import styled from 'styled-components'
import "antd/dist/antd.css"

import {store} from '../../store.js'
import BioBasicInfo from './bioBasicInfo'
import BioPhotos from './bioPhotos'


const Div = styled.div`
     display:flex;                    
     align-items:center; 
     flex-direction:column;   
     padding-top:60px;         
     width:100%;        
     .breadcrumb{
        color:#444;
     };   
     .breadcrumb :hover{
         font-weight:bold;
         color:#444;
     }                                    
`
const StyledDiv = styled.div`
       display:flex;
       flex-direction:column;                 
       width:75%;  
       padding-top:10px;          
       @media screen and (max-width:640px){
           width:95%;
       };
       @media screen and (min-width:640px) and (max-width:1024){
           width:80%;
       }
`


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
            <Div>                                                                                      
                <StyledDiv>
                    <BioBasicInfo wheelDir={wheelDir}/>                                        
                    <BioPhotos wheelDir={wheelDir}/>
                </StyledDiv>
            </Div>             
    )
}
