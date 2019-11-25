import React from 'react'
import {Empty} from 'antd'
import styled from 'styled-components'

const h = window.innerHeight;

const PhotoDiv = styled.div`      
      display:flex;
      justify-content:center;
      align-items:center;
      width:100%; 

`

export default function BioPhotos() {
    return (
        <PhotoDiv id="component-anchor-photos" style={{height:h}}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="no photos yet"/>
        </PhotoDiv>
    )
}
