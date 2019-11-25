import React from 'react'
import styled from 'styled-components'

import ProfileLinks from '../common/profileLinks'
import MyImage from '../common/myImage'

const h = window.innerHeight;

const Div = styled.div`                                 
      display: flex;  
      flex-direction:column;
      justify-content:flex-start;
      align-items:center;          
      padding:30px 10px;                 
`

const ImgDiv = styled.div`
      display:flex;
      flex-direction:column;  
      align-items:center;   
      width:60%;     

      @media screen and (min-width: 991px){          
          height:150px;          
          flex-direction:row;
          padding-left:25px;
          background:linear-gradient(to top, #22605188,#60a67766,#90ee9066)
      }              
`
const ParaDiv = styled.div`
      display:flex;
      align-items:flex-start;
        
      @media screen and (min-width: 991px){
          width:75%;     
          padding-left:25px;     
      };
      @media screen and (max-width: 990px){
          padding-top:20px;
      }                 
`


export default function BioBasicInfo(props){    
    return (        
            <Div id='component-anchor-basic' style={{height:h}}>                     
                 
                <ImgDiv>
                    <MyImage/> 
                    <ParaDiv>
                        <p>Hi, Sajal here. This is my portfolio website. If you are interested about me you can browse this site and you can know a bit. Best wishes.</p>
                    </ParaDiv>                    
                </ImgDiv>                                                                                           
            </Div>
    )        
}