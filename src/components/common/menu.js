import React from 'react'
import styled from 'styled-components'
import {BrowserRouter,Link} from 'react-router-dom'
import {Affix} from 'antd'
import 'antd/dist/antd.css'

const Div = styled.div`
      display:flex;
      background:white;
      height:75px; 
      justify-content:'center';
      align-items:center;
      padding:0px 390px;
      border-bottom:1px solid #bbb5;
      
`
const ItemDiv = styled.div`
      display:flex;      
      width:150px;
      font-family:consolas;
      font-size:20px;
      font-weight:bold;
      justify-content:center;
      align-items:center;
`
const LinkItem = styled(Link)`
      color:#60a677;
      :hover{
          color:black;
      };
`

function Menu(props) {
    return (
        <Affix>
            <Div>
               <ItemDiv>
                    <LinkItem to="/">Home</LinkItem>
                </ItemDiv>

                <ItemDiv>
                    <LinkItem to="/bio">Bio</LinkItem>
                </ItemDiv>

                <ItemDiv>
                    <LinkItem to="/blog">Blog</LinkItem>
                </ItemDiv>                
            </Div>
        </Affix>
    )
}

export default Menu
