import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
      padding:10px 120px; 
      background-color: #ddd;              
`

export default function Footer(props){    
    return(
            <Foot style={{height:(window.innerHeight*.01*12)}}>
                --- footer is under construction... ---
            </Foot>
        )
}