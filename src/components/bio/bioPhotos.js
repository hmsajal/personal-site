import React from 'react'
import {Empty} from 'antd'
import styled from 'styled-components'

const h = window.innerHeight;

const PhotoDiv = styled.div`      
      display:flex;
      flex-direction:column;      
      align-items:center;      
      width:100%;      
`
const HeadingDiv = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;   
      padding:2px 20px; 
      margin-bottom:10px;    
      background:#60a67777;         
      transform:skew(-15deg);       
`

export default function BioPhotos() {
    return (
        <PhotoDiv style={{height:h}}>
            <HeadingDiv>
                <h3 id="photos" style={{color:'#333',fontSize:16,fontFamily:'fira sans',fontWeight:"normal",transform:'skew(15deg)'}}>
                    My Photos
                </h3>
            </HeadingDiv>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="no photos yet" 
                          style={{background:'#f2f2f2',height:'70%',width:'70%',display:'flex',
                                  justifyContent:'center',alignItems:'center'}}
            />
        </PhotoDiv>
    )
}
