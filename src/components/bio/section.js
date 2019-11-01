import React from 'react'
import styled from 'styled-components'

const Div = styled.div`      
      display: flex;
      flex-direction:column;
      justify-content:flex-start;
      width: 68%;
      vertical-align: top;      
`

export default function Section(props){
    return(
        
        <Div>             
                <h3>A very few things to add</h3>

                <p>Suddenly I've noticed that there are a very few things to add to this bio type website. This is a kind of website which I have been wishing to have for many days. But for an anxiety patient who procrastinates all the time, it is not unexpected to delay. But you see at last I've made it thanks to github. The beautiful but simple theme template by <a href="https://github.com/orderedlist">orderedlist</a> should also be mentined.</p>

                <h3>Chronicles of a chronic disorder </h3>

                <h3>Childhood, Frustration and Antifrustration</h3>                                           
        </Div>
    )
    
}