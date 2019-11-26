import React,{useState, useEffect} from 'react'
import styled from 'styled-components'

import {NavMenu,NavBar} from './navigationAlternatives'


const Div = styled.div`
      margin-top:40px;
      display:flex;      
      align-items:center;
      width:100%;    
      justify-content:space-between;                                
`
const MyName = styled.span`
      font-size:31px;      
      font-family:fira sans,sans-serif;
      letter-spacing:1.5px;
      color:#6c6;  
      padding-left:60px;
      
      @media screen and (max-width:890px){
        padding-left:40px;
        letter-spacing:1px;
        font-size: 28px;
      }                            
`


function HomeNav() {
    return (
        <Div>           
            <MyName>HASAN MAHMUD</MyName>
            <ChoosingNavMenu/>
        </Div>        
    )
}

export function ChoosingNavMenu(){     
    const widthMatching = window.matchMedia("(max-width:890px)")
    return widthMatching.matches ? <NavBar/> : <NavMenu/>     
}

export default HomeNav;