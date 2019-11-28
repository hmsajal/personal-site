import React from 'react'
import {Breadcrumb,Icon,Affix} from 'antd'
import styled from 'styled-components'
import "antd/dist/antd.css"

import BioInfo from './bioBasicInfo'
import Photos from './bioPhotos'
import Timeline from './bioTimeline'


const Div = styled.div`
     display:flex;       
     flex-direction:column;
     align-items:center;
     @media screen and (min-width:1100px){
        margin:0px 150px;    
        padding:30px 0px 0px 0px;    
     };
     @media screen and (min-width:640px) and (max-width:1099){
        padding:30px 50px 0px 50px;
     };
     @media screen and (max-width:639px){
        padding:10px;
     }                            
`
const StyledDiv = styled.div`
       display:flex;
       flex-direction:column;                 
       width:100%;               
`
const h = window.innerHeight;

export default function BioHome() {
    return (          
            <Div>     
                <Affix offsetTop={100}>
                    <Breadcrumb style={{background:'#fff',padding:'10px 20px' }}>
                        <Breadcrumb.Item href="">
                            <Icon type="user" />
                            <span>ABOUT ME</span>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item href="">
                            <Icon type="clock-circle" />
                            <span>TIMELINE</span>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item href="">
                            <Icon type="picture" />
                            <span>PHOTOS</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Affix>       
                
                <StyledDiv>
                    <BioInfo/>                    
                    <Timeline/>
                    <Photos/>
                </StyledDiv>
            </Div>             
    )
}
