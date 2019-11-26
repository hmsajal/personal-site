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
      letter-spacing:1px;
      color:#6c6;  
      padding-left:50px;
      
      @media screen and (max-width:640px){
        padding-left:30px;        
        font-size: 26px;
        letter-spacing:0px;
      };
      @media screen and (min-width:641px) and (max-width:1099px){
        padding-left:50px;
        font-size:28px;
        letter-spacing:.5px;
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
    const widthMatching = window.matchMedia("(max-width:780px)")
    return widthMatching.matches ? <NavBar/> : <NavMenu/>     
}

export default HomeNav;