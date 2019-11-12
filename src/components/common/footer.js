import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
      padding:5px 100px; 
      background-color: #ddd;              
`

export default function Footer(props){    
    return(
            <Foot style={{height:(window.innerHeight*.01*12)}}>
                --- footer is under construction... ---
            </Foot>
        )
}