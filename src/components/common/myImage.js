import React from 'react'
import styled from 'styled-components'

import MyPhoto from '../../assets/images/myPhoto.jpg'

const Image = styled.img`
      width:137px;
      height:137px;
      border-radius:100px;      
      box-shadow: 0px 0px 1px #000;            
`

function MyImage() {
    return (
        <Image src={MyPhoto}/>        
    )
}


export default MyImage;
