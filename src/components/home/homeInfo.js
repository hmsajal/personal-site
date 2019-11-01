import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    color:#222;
    font-style:italic;    
    font-family: 'Times New Roman' sans-serif;
    font-size:22px;    
    display:flex;    
`

function HomeInfo(props) {
    return (
        <Div>
            <p> This website is an account of personal interests and information of Hasan Mahmud Sajal. But it might interest you too.</p>      
        </Div>
    )
}

export default HomeInfo
