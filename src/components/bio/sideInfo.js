import React from 'react'
import styled from 'styled-components'

import ProfileLinks from '../common/profileLinks'
import MyImage from '../common/myImage'

const Div = styled.div`            
      width:26%;             
      display: flex;  
      flex-direction:column;
      justify-content:flex-start;
      align-items:center;            
`


export default function SideInfo(props){    
    return (        
            <Div>      
                <MyImage/>
                <div style={{height:'40px'}}/>                                        
                <ProfileLinks colorful="colorful" iconSize="20px"/>                                                                                
            </Div>
    )        
}