import React from 'react'
import styled from 'styled-components'

import ProfileLinks from '../common/profileLinks'
import MyImage from '../common/myImage'

const Div = styled.div`                                 
      display: flex;  
      flex-direction:column;
      justify-content:flex-start;
      align-items:center;          
      padding:30px;          
`


export default function BioBasicInfo(props){    
    return (        
            <Div id='component-anchor-basic'> 
                <div style={{height:'40px'}}/>      
                <MyImage/>
                <div style={{height:'40px'}}/>                                                            
                <div style={{height:'40px'}}/> 
                <div style={{height:'200px'}}/>                                                                             
            </Div>
    )        
}