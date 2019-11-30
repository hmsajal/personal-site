import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {Affix} from 'antd'

import {NavMenu,NavBar} from './menuPart'


const Div = styled.div`
      background:#60a677;      
      display:flex;  
      align-items:center;
      width:100%;    
      justify-content:space-between;  
      padding-left:70px;
      padding-right:25%;       
      @media screen and (max-width:640px){   
        padding:0px 20px;
      };      
      @media screen and (min-width:641px) and (max-width:1024px){
        padding:0px 45px;
      };                     
`
const MyName = styled.span`            
      height:100%;
      width:320px; 
      display:flex;
      align-items:center;
      color:#222;              
      font-size:30px;
      font-weight:bold;
      font-family: 'Special elite', cursive;
      letter-spacing:1.5px;                         
      @media screen and (max-width:640px){   
        font-size: 26px;
        letter-spacing:1px;
      };                  
`


export default function Menu() {
    return (
        <Affix>   
            <Div style={{display:'flex',flexDirection:'row',height:window.innerHeight*.11}}>
                <MyName>HASAN MAHMUD</MyName>
                <ChoosingNavMenu/>
            </Div>        
        </Affix>        
    )
}

export function ChoosingNavMenu(){     
    const widthMatching = window.matchMedia("(max-width:1024px)")
    return widthMatching.matches ? <NavBar/> : <NavMenu/>     
}