import React from 'react'
import styled from 'styled-components'

import ProfileLinks from '../common/profileLinks'
import MyImage from '../common/myImage'
import BioInfo from './bioInformation'

const h = window.innerHeight;

const Div = styled.div`                                    
      display: flex;  
      justify-content:space-between;
      align-self:center;   
      margin-top:10px;           
      margin-bottom:80px;  
      @media screen and (max-width:1024px){
          flex-direction:column;
          justify-content:flex-start;
          align-items:center;                    
      }               
`

const ImgParaDiv = styled.div`
      display:flex;     
      width:35%;  
      align-items:center;                 
      flex-direction:column;        
      background:linear-gradient(to bottom,#fcfcfc,#f3f3f3,#e2e2e2,#f3f3f3,#fcfcfc);            
      @media screen and (max-width:1024px){
          width:100%
      }                       
`
const ImgDiv = styled.div`      
      padding:10px;   
      margin:30px;     
`
const ParaDiv = styled.div`      
      display:flex; 
      padding:10px; 
      font-size:15px;  
      color:#444;                                 
`


export default function BioBasicInfo(props){    
    return (                                    
                <Div id="basicInfo">
                    <ImgParaDiv>
                        <ImgDiv>
                            <MyImage/>
                        </ImgDiv>                                         
                        <ProfileLinks iconSize={18} width="255px" colorful="colorful" backColor="linear-gradient(to right,#fafafa,#e2e2e2,#eaeaea,#fafafa)"/>                    
                        <ParaDiv>
                            Hi, Sajal here. This is my portfolio website. 
                            If you are interested about me or my website, you can browse this site.
                            I hope that you can know a bit about me.                        
                        </ParaDiv>                                
                    </ImgParaDiv>    
                    <BioInfo/>                                                                                       
                </Div>                                             
    )        
}