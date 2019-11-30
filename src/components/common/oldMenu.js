import React from 'react'
import styled from 'styled-components'
import {BrowserRouter,Link} from 'react-router-dom'
import {Affix} from 'antd'
import 'antd/dist/antd.css'

const w = window.innerWidth;
const h = window.innerHeight;

const Div = styled.div`
      display:flex;         
      justify-content:space-between;       
      align-items:center;  
      height:100%;                                      
`
const NameDiv = styled.div`
      display:flex;
      width:25%;
      height:100%;
      justify-content:center;
      align-items:center;         
      font-size:30px;
      font-weight:bold;
      font-family: 'Special elite', cursive;
      letter-spacing:1px;       
      a{color:#444}; 
      a:hover{color:#555b};            
`
const NavDiv = styled.div`
      display:flex;    
      justify-content:space-evenly;
      align-items:center; 
      width:65%;  
      height:100%;      
      font-family:consolas;
      font-size:20px;
      font-weight:bold;             
`
const LinkDiv = styled.div`
      display:flex;
      justify-content:center;      
      align-items:center;     
      height:100%;            
`
const LinkItem = styled(Link)`                               
      display:flex;                
      justify-content:center;
      align-items:center;      
      padding:2px 20px;                
`
//use styled components props to select color and hover color of menu items 
// and also to mark the current item

function Menu(props) {
    return (
        <Affix>            
            <div style={{height:h*.01*props.scaleOfHundredHeight,backgroundColor:props.colorBack,
                         padding:'0px 100px',borderBottom:'1px solid #bbb5'}}>                               
                <Div>
                    <NameDiv>
                        <div>Hasan Mahmud</div>
                    </NameDiv>
                    
                    <NavDiv>
                        <LinkDiv style={{width:'25%'}}>
                             <LinkItem to={"/bio"}>About Me</LinkItem>                        
                        </LinkDiv>

                        <LinkDiv style={{width:'40%'}}>
                             <LinkItem to={"/career"}>Career and Skills</LinkItem>
                        </LinkDiv>
                        
                        <LinkDiv style={{width:'20%'}}>
                             <LinkItem to={"/blog"}>Blog</LinkItem>                        
                        </LinkDiv>                                                    
                    </NavDiv>
                </Div>                                        
            </div>
        </Affix>
    )
}

export default Menu
