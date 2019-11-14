import React from 'react'
import {Anchor} from 'antd'
import styled from 'styled-components'
import "antd/dist/antd.css"

import BioInfo from './bioBasicInfo'
import Photos from './bioPhotos'
import Timeline from './bioTimeline'
import { faFileExcel } from '@fortawesome/free-regular-svg-icons'

const {Link} = Anchor;

const Div = styled.div`
     display:flex;               
     align-items:flex-start;  
     margin:40px 120px; 
     padding: 0px 40px; 
     background:white;                     
`
const StyledDiv = styled.div`
       display:flex;
       flex-direction:column;                 
       width:100%;        
`
const h = window.innerHeight;

export default function BioMain() {
    return (  
        <div style={{backgroundColor:'#cccd'}}>
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
        </div>           
    )
}
