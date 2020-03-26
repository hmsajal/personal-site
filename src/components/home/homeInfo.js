import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Div = styled.div`
    color:#f6e2b9;        
    font-family:dosis,sans-serif;     
    font-weight:400; 
    font-size:30px;    
    @media screen and (max-width:640px){
        font-size:24px;
    }  
    @media screen and (min-width:641px) and (max-width:1024px){
        font-size:26px;
    }         
`

function HomeInfo(props) {
    return (
        <Div>
            <p style={{display:"inline"}}>An account of personal interests and information on </p>
            
            <Link to="/bio" style={{display:"inline",color:'#215',fontWeight:500}}>Hasan Mahmud Sajal,</Link>
            
            <p style={{display:"inline"}}> but it might interest you too.</p>      
        </Div>
    )
}

export default HomeInfo
