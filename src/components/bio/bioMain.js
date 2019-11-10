import React from 'react'
import styled from 'styled-components'
import {Divider} from 'antd'

import Left from './bioLeft'
import Middle from './bioMiddle'

const Div = styled.div`
    padding: 40px 100px; 
    background-color: #fff; 
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`  


export default function BioMain(){
    return(
        <Div>
            <Left/>   
            <Divider type="vertical" style={{height:500,alignSelf:'center',backgroundColor:'#ddd'}}/>       
            <Middle/>
        </Div>
    )
}