import React from 'react'
import styled from 'styled-components'

import ProfileLinks from '../common/profileLinks'
import HomeInfo from '../home/homeInfo'
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
                <br/> <br/> <br/>                        
                <ProfileLinks/>  
                
                <HomeInfo/>                                                
            </Div>
    )        
}