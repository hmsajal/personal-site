import React from 'react'
import styled from 'styled-components'

const ContentDiv = styled.div`
      display:flex;
      flex-direction:column;                                    
      @media screen and (max-width:1024px){
          width:100%;
      }
`
const Div = styled.div`
      height: 100%;
      padding:20px;
      display:flex;
      flex-direction:column;
`

export default function CareerContent() {
    return (
        <ContentDiv>
                <Div>
                    <h2></h2>
                    <div>                        
                    </div>
                </Div>
        </ContentDiv>
    )
}
