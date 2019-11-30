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

export default function BioPhotos() {
    return (
        <PhotoDiv id="photos" style={{height:h}}>
            <h3 style={{color:'#333',fontSize:16}}>Photos of me.</h3>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="no photos yet" 
                          style={{background:'#f2f2f2',height:'70%',width:'70%',display:'flex',
                                  justifyContent:'center',alignItems:'center'}}
            />
        </PhotoDiv>
    )
}
