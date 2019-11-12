import React from 'react'
import styled from 'styled-components'

import ProfileLinks from '../common/profileLinks'
import MyImage from '../common/myImage'

const Div = styled.div`          
      background-color: #fff;                        
      display: flex;  
      flex-direction:column;
      justify-content:flex-start;
      align-items:center;    
      width:100%;      
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