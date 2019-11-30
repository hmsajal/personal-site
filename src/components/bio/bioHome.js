import React from 'react'
import {Breadcrumb,Icon,Affix} from 'antd'
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
     @media screen and (max-width:640px){
        padding:10px;        
     };                                 
`
const StyledDiv = styled.div`
       display:flex;
       flex-direction:column;                 
       width:75%;  
       margin-top:18px;             
`
const h = window.innerHeight;

export default function BioHome() {
    return (          
            <Div>     
                <Affix offsetTop={68} style={{width:'80%',marginTop:60,}}>                    
                        <Breadcrumb className="breadCrumb" style={{padding:"8px 10px",justifyContent:'center',display:'flex',
                                                    background:'linear-gradient(to right,#fcfcfc,#f3fff3,#bfe2bf,#f3fff3,#fcfcfc)',
                                                    }}>
                            <Breadcrumb.Item href="#about">
                                <Icon type="user" />
                                <span>ABOUT ME</span>
                            </Breadcrumb.Item>

                            <Breadcrumb.Item href="#timeline">
                                <Icon type="clock-circle" />
                                <span>TIMELINE</span>
                            </Breadcrumb.Item>

                            <Breadcrumb.Item href="#photos">
                                <Icon type="picture" />
                                <span>PHOTOS</span>
                            </Breadcrumb.Item>
                        </Breadcrumb>                                  
                </Affix>       
                
                <StyledDiv>
                    <BioBasicInfo/>                    
                    <BioTimeline/>
                    <BioPhotos/>
                </StyledDiv>
            </Div>             
    )
}
