import React from 'react'
import styled from 'styled-components'

import HomeNav from './homeNav'
import HomeInfo from './homeInfo'
import ProfileLinks from '../common/profileLinks'

const Div = styled.div`
      display:flex;       
      width:100%;     
      height:100%; 
      flex-direction:column;               
      align-items:center;         
      background-color:#60a677;
      background:linear-gradient(to bottom,#60a677,#226051,#226051,#60a677);
`      
const InfoDiv = styled.div`
      height:60%;     
      padding-bottom:40px;
      display:flex;
      justify-content:center;
      align-items:center;
      width:45%; 
      @media screen and (max-width:640px) {
          width:75%;
      };
      @media screen and (min-width:641px) and (max-width:1024px) {
          width:65%;
      };
`

function Home(){
    return(
        <Div style={{height:window.innerHeight}}>               
            <HomeNav/>                        
            <InfoDiv>
                <HomeInfo/>
            </InfoDiv>
            <div style={{height:'20%',width:'100%',display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
                <ProfileLinks iconSize={22} width="320px"/>
            </div>            
        </Div>
    )
}

export default Home;