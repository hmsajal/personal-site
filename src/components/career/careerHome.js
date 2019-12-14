import React from 'react'
import styled from 'styled-components'

import CareerNav from './careerNav'
import CareerContent from './careerContent'
     

const Div = styled.div`
      display:flex;                    
      margin: 30px 100px;                 
      @media screen and (max-width:1024px) {
          flex-direction:column;
          margin: 0px 40px;
      }
`

export default function CareerHome(props) {
    return (
        <Div> 
            <CareerNav/>    
            <CareerContent/>                              
        </Div>
    )
}

