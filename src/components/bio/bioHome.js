import React from 'react'
import {Anchor} from 'antd'
import styled from 'styled-components'
import "antd/dist/antd.css"

import BioInfo from './bioBasicInfo'
import Photos from './bioPhotos'
import Timeline from './bioTimeline'

const {Link} = Anchor;

const Div = styled.div`
     display:flex;               
     align-items:flex-start;       
     
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
                <Anchor offsetTop={300} targetOffset={h/16}>
                        <Link title="Basic Info" href="#component-anchor-basic"/>  
                        <Link title="Timeline" href="#component-anchor-timeline"/>               
                        <Link title="Photos" href="#component-anchor-photos"/>
                </Anchor>
                <StyledDiv>
                    <BioInfo/>                    
                    <Timeline/>
                    <Photos/>
                </StyledDiv>
            </Div>             
    )
}
