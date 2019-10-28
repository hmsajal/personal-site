import React from 'react'
import styled from 'styled-components'
import {Divider} from 'antd'

import SideInfo from './sideInfo'
import Section from './section'

const Div = styled.div`
    padding: 40px 100px; 
    background-color: #fff  
    display:flex;
    flex-direction:row;
    justify-content:space-between
`  


export default function MainPart(){
    return(
        <Div>
            <SideInfo/>   
            <Divider type="vertical" style={{height:500,alignSelf:'center',backgroundColor:'#666'}}/>       
            <Section/>
        </Div>
    )
}