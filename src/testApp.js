import React from 'react';
import styled from 'styled-components'


export default function Test() {

    const Div = styled.div`
          display:flex;
          justify-content:center;
          align-items:center;
          font-size:25px;
          width:200px;
          height:200px;
          background:green;
    `

    const reducer = (state, action)=>{
      switch(action.type){
        case 'incrmnt': 
          return (state+1)
        case 'dcrmnt':
          return (state-1)
        default:
          return (0)
      }
    }


    const [state, dispatch] = React.useReducer(reducer,0)

      return (
        
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',background:'grey'}}>
          <h2 style={{color:'orange',background:'black',width:60,height:30,display:'flex',justifyContent:'center',alignItems:'center'}}>{state}</h2>
          <Best/>
          <div>
            <Div>
              <button style={{color:'grey',width:60,height:40,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={()=>{dispatch({type:'dcrmnt'})}}>-</button>
                  <div style={{width:40,height:40,display:'flex',justifyContent:'center',alignItems:'center'}}>{state}</div>
              <button style={{color:'grey',width:60,height:40,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={()=>dispatch({type:'incrmnt'})}>+</button>
            </Div>
          </div>        
        </div>
      )
}


    export function Best(){
      return(
        {state}
      )
    }

