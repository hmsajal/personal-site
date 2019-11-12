import React from 'react'
import {Anchor} from 'antd'
import styled from 'styled-components'

import Info from './bioBasicInfo'
import Photos from './bioPhotos'

const {Link} = Anchor;

const Div = styled.div`
     display:flex;          
     align-items:center;  
     padding:0px 100px;             
`
const StyledDiv = styled.div`
       display:flex;
       flex-direction:column;    
       width:90%;        
`
const AnchDiv = styled.div`
     display:flex;
     justify-content:center;
     align-items:center;  
     width:10%;             
`

export default function BioMain() {
    return (  
        <Div>
            <AnchDiv>
                <Anchor>
                    <Link title="Basic Info" href="#component-anchor-basic"/>                 
                    <Link title="Photos" href="#component-anchor-photos"/>
                </Anchor>
            </AnchDiv>            
            
            <StyledDiv>
                <Info id="component-anchor-basic"/>
                <Photos id="component-anchor-photos"/>
            </StyledDiv>
        </Div>      
    )
}
