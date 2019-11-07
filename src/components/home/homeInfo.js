import React from 'react'
import styled from 'styled-components'
import {BrowserRouter,Link} from 'react-router-dom'

const Div = styled.div`
    color:#f6e2b9;        
    font-family:dosis,sans-serif; 
    height:40%;  
    font-weight:400; 
    font-size:30px;    
    
`

function HomeInfo(props) {
    return (
        <Div>
            <p style={{display:"inline"}}>An account of personal interests and information on </p>
            
            <Link to="/bio" style={{display:"inline",color:'#216',fontWeight:500}}>Hasan Mahmud Sajal</Link>
            
            <p style={{display:"inline"}}> but it might interest you too.</p>      
        </Div>
    )
}

export default HomeInfo
