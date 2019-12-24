import React,{useContext,useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom'
import {Breadcrumb,Icon} from 'antd'
import styled from 'styled-components'
import "antd/dist/antd.css"

import {store} from '../../store.js'
import BioBasicInfo from './bioBasicInfo'
import BioPhotos from './bioPhotos'
import BioTimeline from './bioTimeline'


const Div = styled.div`
     display:flex;       
     flex-direction:column;        
     align-items:center;    
     padding-top:60px;         
     width:100%;   
     .breadcrumb{
        color:#444;
     }       
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
    const globalState = useContext(store)          
    const {state,dispatch} = globalState;    
    
    useEffect(()=>{                        
        dispatch({type:'CurrentMenuItemSelection',selectedMenu:path})            
    },[])      
    
    return (          
            <Div>     
                <Breadcrumb  separator="|" style={{padding:"5px",justifyContent:'center',display:'flex',
                             alignSelf:'center',color:'#333', zIndex:1,transition:'.3s',position:'fixed',                         
                             background:'linear-gradient(to right,#d0f0c0,#50c888,#d0f0c0)',
                             borderColor:'#ab9',borderStyle:'solid',
                             borderWidth: state.scrollDown>0 ? '0px' : 
                                         (window.matchMedia("(max-width:480px)").matches ? '0px' : '1px'),

                             width: state.scrollDown>0 ? '100%' : 
                                   (window.matchMedia("(max-width:480px)").matches ? '100%' : 320),
                             
                             top: state.scrollDown>0 ? 0 :                                  
                                 ( window.pageYOffset!==0 ? window.innerHeight*.12 : 
                                  (window.matchMedia("(max-width:480px)").matches ? window.innerHeight*.12 :
                                   window.innerHeight*.12+30))
                             }}>
                        <Breadcrumb.Item href="#basicInfo" className="breadcrumb" style={{margin:'0px 3px'}}>
                            <Icon type="user" />                                
                            <span> BASIC INFO</span>                                
                        </Breadcrumb.Item>

                        <Breadcrumb.Item href="#timeline" className="breadcrumb" style={{margin:'0px 3px'}}>                                
                            <Icon type="clock-circle" />
                            <span> TIMELINE</span>                                
                        </Breadcrumb.Item>

                        <Breadcrumb.Item href="#photos" className="breadcrumb" style={{margin:'0px 3px'}}>                                
                            <Icon type="picture" />
                            <span> PHOTOS</span>
                        </Breadcrumb.Item>
                </Breadcrumb>                                                     
                
                <StyledDiv>
                    <BioBasicInfo/>                    
                    <BioTimeline/>
                    <BioPhotos/>
                </StyledDiv>
            </Div>             
    )
}
