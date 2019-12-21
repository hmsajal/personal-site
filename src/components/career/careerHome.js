import React,{useContext,useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom'
import styled from 'styled-components'

import {store} from '../../store.js'
import CareerNav from './careerNav'
import CareerContent from './careerContent'
     

const Div = styled.div`
      display:flex;                    
      margin: 30px 100px;                 
      @media screen and (max-width:1024px) {
          flex-direction:column;
          margin: 0px 40px;
      }
`

export default function CareerHome(props) {

    const {path} = useRouteMatch()
    const globalState = useContext(store)          
    const {dispatch} = globalState;    
    
    useEffect(()=>{                        
        dispatch({type:'CurrentMenuItemSelection',selectedMenu:path})            
    },[])

    return (
        <Div> 
            <CareerNav/>    
            <CareerContent/>                              
        </Div>
    )
}

