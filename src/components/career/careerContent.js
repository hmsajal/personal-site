import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
      height: 100%;
      padding:20px;
      display:flex;
      flex-direction:column;
      @media screen and (max-width:1024px){
          width:100%;
      }
`

export default function CareerContent() {
    return (
       <div>
           
       </div>
    )
}

export  function AboutMe(){
    return(
        <Div>
            <h2 className="check">
                About Me
            </h2>
            <div>

            </div>
        </Div>        
    )
}

export  function Skills(){
    return(
        <Div>
            <h2>
                Skills
            </h2>
            <div>

            </div>
        </Div>        
    )
}

export  function Projects(){
    return(
        <Div>
            <h2>
                My Projects
            </h2>
            <div>
                
            </div>
        </Div>        
    )
}
