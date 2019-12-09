import React,{useState} from 'react'
import {Breadcrumb,Icon} from 'antd'
import styled from 'styled-components'
import "antd/dist/antd.css"

import BioBasicInfo from './bioBasicInfo'
import BioPhotos from './bioPhotos'
import BioTimeline from './bioTimeline'


const Div = styled.div`
     display:flex;       
     flex-direction:column;        
     align-items:center;             
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
       margin-top:65px;    
       @media screen and (max-width:640px){
           width:95%;
       };
       @media screen and (min-width:640px) and (max-width:1024){
           width:80%;
       }
`
const h = window.innerHeight;
var breadcrumbOffset = h*.12;


export default function BioHome() {             

    return (          
            <Div>     
                <div id="bioBreadcrumb" style={{width:'100%', display:'flex', justifyContent:'center',alignSelf:'center',
                                        position:'fixed',zIndex:1,top:breadcrumbOffset+'px',transition:'.3s'}}>
                        <Breadcrumb separator="|" style={{padding:"5px",justifyContent:'center',display:'flex',
                                    alignSelf:'center',color:'#333',  width:'100%',                              
                                    background:'linear-gradient(to right,#d0f0c0,#50c888,#d0f0c0)'}}>
                            <Breadcrumb.Item href="#basicInfo" className="breadcrumb" style={{margin:'0px 3px'}}>
                                <Icon type="user" />                                
                                <span> ABOUT ME</span>                                
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
                </div>       
                
                <StyledDiv>
                    <BioBasicInfo/>                    
                    <BioTimeline/>
                    <BioPhotos/>
                </StyledDiv>
            </Div>             
    )
}
