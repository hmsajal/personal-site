import React,{useState, useEffect} from 'react'
import styled from 'styled-components'

import {NavMenu,NavBar} from './navigationAlternatives'


const Div = styled.div`
      margin-top:40px;
      display:flex;      
      align-items:center;
      width:100%;    
      justify-content:space-between;  
      padding:0px 60px;       
      @media screen and (max-width:640px){   
        padding:0px 20px;
      };
      @media screen and (min-width:641px) and (max-width:1024px){
        padding:0px 45px;
      };                     
`
const MyName = styled.span`
      font-size:32px;      
      letter-spacing:1px;
      font-family:fira sans,sans-serif;
      color:#002040;  
      
      @media screen and (max-width:640px){   
        font-size: 26px;
        letter-spacing:0px;
      };
      @media screen and (min-width:641px) and (max-width:1024px){
        font-size:30px;
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
    const widthMatching = window.matchMedia("(max-width:790px)")
    return widthMatching.matches ? <NavBar/> : <NavMenu/>     
}

export default HomeNav;