import React from 'react';
import styled from 'styled-components'

import MenuBar from '../common/menuBar'
import Section from '../bio/section'
import Footer from '../common/footer'

const Div = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;    
      padding:100px 30px;      
      div{
          width:90%
      };
`

export default function BlogHome(props){    
     
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <MenuBar/>                
                <Div>
                   <Section/>   
                </Div>                                                
                <Footer/>         
            </div>
        )    
}