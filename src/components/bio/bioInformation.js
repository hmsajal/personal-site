import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
      width:60%;      
      @media screen and (max-width:1024px){
          width:100%;
          margin-top:20px;
      };      
      display:flex;
      flex-direction:column;
      align-items:flex-start;             
`

export default function BioInformation() {
    return (
        <Div  >
            <h3 style={{color:'#444',marginBottom:20}}>Here are some information about me.</h3>
            <ul>
                <li><span style={{fontWeight:'bold',paddingRight:8}}>Date of Birth: </span>06 September</li>
                <li><span style={{fontWeight:'bold',paddingRight:8}}>Birth Place: </span>Chandpur, Bangladesh</li>
                <li><span style={{fontWeight:'bold',paddingRight:8}}>Living Place: </span>Dhaka, Bangladesh</li>
                <li><span style={{fontWeight:'bold',paddingRight:8}}>Academic Information: </span>
                    From my childhood till now I studied in five formal institutions- 
                    three schools, one college and one university.</li>                  
            </ul>
{/*            <p style={{paddingLeft:10}}>Click to see the names of them and the years I was active there.</p>
*/}
            
        </Div>
    )
}
