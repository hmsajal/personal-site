import React from 'react'
import styled from 'styled-components'

import ProfileLinks from '../common/profileLinks'
import MyImage from '../common/myImage'

const Div = styled.div`    
      padding: 0px 100px; 
      background-color: #fff;                        
      display: flex;  
      flex-direction:column;
      justify-content:flex-start;
      align-items:center;            
`


export default function BioBasicInfo(props){    
    return (        
            <Div> 
                <div style={{height:'40px'}}/>      
                <MyImage/>
                <div style={{height:'40px'}}/>                                        
                <ProfileLinks colorful="colorful" iconSize="20px"/>    
                <div style={{height:'40px'}}/> 
                <div style={{height:'200px'}}/>                                                                             
            </Div>
    )        
}