import React from 'react'
import {Empty} from 'antd'
import styled from 'styled-components'

const PhotoDiv = styled.div`      
      justify-content:center;
      align-items:center;
      width:100%;
`

export default function BioPhotos() {
    return (
        <PhotoDiv id="component-anchor-photos">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="no photos yet"/>
        </PhotoDiv>
    )
}
