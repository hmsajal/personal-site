import React from 'react'
import styled from 'styled-components'

import HomeNav from './homeNav'
import HomeInfo from './homeInfo'
import ProfileLinks from '../common/profileLinks'
import MyImage from '../common/myImage'

const Div = styled.div`
      display:flex; 
      flex-direction:column;   
      justify-content:center;
      align-items:center;           
`      
const InfoDiv = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;
      width:40%;
      height:250px;
`

function Home(){
    return(
        <Div>               
            <HomeNav/>  
           <div style={{marginTop:'80px'}}>
              <MyImage/>     
           </div>            
            <InfoDiv>
                <HomeInfo/>
            </InfoDiv>
            <ProfileLinks/>
        </Div>
    )
}

export default Home;