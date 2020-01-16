import React from 'react'
import styled from 'styled-components'
import {Descriptions} from 'antd'

import ProfileLinks from '../common/profileLinks'
import MyImage from '../common/myImage'

const h = window.innerHeight;

const Div = styled.div`   
      background-color:white;                                 
      display: flex;  
      justify-content:space-between;
      align-self:center;   
      margin-top:10px;                 
      animation-name:fade;
      animation-duration:0s;      
      @keyframes fade{
         from{opacity:0}
         to{opacity:1}
      };                            
      @media screen and (max-width:1024px){
          flex-direction:column;
          justify-content:flex-start;
          align-items:center;                    
      }               
`

const ImgParaDiv = styled.div`
      display:flex;     
      width:38%;  
      align-items:center;                 
      flex-direction:column;        
      background:linear-gradient(to bottom,#fefefe,#fcfcfc,#e8e8e8,#fcfcfc,#fefefe);            
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
const DescDiv = styled.div`
      width:57%;      
      padding-left:10px;
      @media screen and (max-width:1024px){
          width:100%;
          margin-top:20px;
      };      
      display:flex;
      flex-direction:column;
      align-items:flex-start;             
`


export default function BioBasicInfo(props){        
     console.log(props.wheelDir)   
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
                    <DescDiv> 
                        <Descriptions title="Basic Info" layout="vertical">
                                <Descriptions.Item label="Name">Hasan Mahmud</Descriptions.Item>
                                <Descriptions.Item label="Mobile">+8801672429529</Descriptions.Item>
                                <Descriptions.Item label="Residence">Dhaka, Bangladesh</Descriptions.Item>
                                <Descriptions.Item label="Age">
                                28 years                     
                                </Descriptions.Item>                                             
                        </Descriptions>                   
                    </DescDiv>                                                                                     
                </Div>                                             
    )        
}