import React from 'react'
import {Empty} from 'antd'
import styled from 'styled-components'

const h = window.innerHeight;

const PhotoDiv = styled.div`  
      background-color:white;          
      flex-direction:column;      
      align-items:center;      
      width:100%;      
      top:0px;
      display:none;   
      animation-name:fade;
      animation-duration:2s;
      @keyframes fade{
          from{opacity:0}
          to{opacity:1}
      };   
`

export default function BioPhotos() {
    return (
        <PhotoDiv style={{height:h}} id="photos">
            <div style={{paddingTop:20}}>
                <h3>
                    My Photos
                </h3>
            </div>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="no photos yet" 
                          style={{background:'#f2f2f2',height:'70%',width:'70%',display:'flex',
                                  justifyContent:'center',alignItems:'center'}}
            />
        </PhotoDiv>
    )
}
