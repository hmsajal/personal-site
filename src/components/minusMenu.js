import React from 'react'
import styled from 'styled-components'

import MainPart from './mainPart'
import Footer from './footer'


const Div = styled.div`
      a{
          color:#550          
      }
             
`

export default function MinusMenu(props){
    return(
        <Div>
            <MainPart/>
            <Footer/>
        </Div>
    )
}