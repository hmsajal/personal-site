import React from 'react'
import styled from 'styled-components'

import MyPhoto from '../assets/images/myPhoto.jpg'

const Div = styled.div`            
      width:27%;             
      display: flex;  
      flex-direction:column;
      justify-content:flex-start;
      align-items:center;            
`

const Image = styled.img`
      width:137px
      height:137px
      border-radius:100px
      margin:20px 0px
`

const P = styled.p`
    color:#222
    font-style:italic
    font-family:cursive
    font-size:15px
`

export default function SideInfo(props){    
    return (        
            <Div>    
                <Image src={MyPhoto}/>                            
                <P style={{alignSelf:'center'}}> This website is an account of personal interests and information of Hasan Mahmud Sajal. But it might interest you too.</P>                
                <ul style={{alignSelf:'flex-start'}}>
                    <li><a href="https:facebook.com/sajalhm"><strong>Facebook</strong></a></li>
                    <li><a href="https://linkedin.com/in/hmsajal"><strong>Linkedin</strong></a></li>
                    <li><a href="http://github.com/hmsajal"><strong>GitHub</strong></a></li>
                </ul>
            </Div>
    )        
}