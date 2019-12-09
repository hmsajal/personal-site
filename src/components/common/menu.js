import React,{useState, useEffect} from 'react'
import styled from 'styled-components'

import {NavMenu,NavBar} from './menuPart'


const Div = styled.div`
      background:#fff;      
      display:flex;  
      flex-direction:row;
      align-items:center;      
      width:100%;    
      justify-content:space-between;  
      padding-left:70px;
      padding-right:70px;        
      box-shadow:0px 0px 1px #777;     
      @media screen and (max-width:1024px){   
        padding-right: 10px;
        padding-left:25px;
      };                                
`
const MyName = styled.span`            
      height:100%;
      width:320px; 
      display:flex;
      align-items:center;
      color:#60a677;              
      font-size:16px;      
      font-family:space comics;          
      font-weight:normal;           
      @media screen and (max-width:640px){   
        width:225px;
        font-size:13px;
      };                        
`


export default function Menu() {
    return (         
            <Div style={{height:window.innerHeight*.12}}>
                <MyName>HASAN MAHMUD</MyName>
                <ChoosingNavMenu/>
            </Div>                  
    )
}

export function ChoosingNavMenu(){     
    const widthMatching = window.matchMedia("(max-width:1024px)")
    return widthMatching.matches ? <NavBar/> : <NavMenu/>     
}