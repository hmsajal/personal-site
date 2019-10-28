import React from 'react'
import styled from 'styled-components'
import {Menu,Affix} from 'antd'
import 'antd/dist/antd.css'


const NormalItem = styled(Menu.Item)`
    color:black !important;    
    border-bottom-width:0px !important;   
    :hover{
        color:skyblue !important;
    }      
`
const NameItem = styled(NormalItem)`     
    :hover{
        color:green !important
    }
`
const SubMenuItem = styled(Menu.SubMenu)`        
    color:black !important;    
    border-bottom-width:0px !important;          
`


function MenuBar(props){    
    return (                    
            <Affix>
                <Menu style={{padding:'5px 40px',fontSize:'16px',borderColor:'#eee', display:'flex',
                              justifyContent:'flex-start', backgroundColor:'#eee',boxShadow: '0px 0px 5px #333333',
                                
                            }} 
                              mode='horizontal'>
                    
                    <NameItem key='sajal' style={{fontSize:25, fontFamily:'Comic Sans MS',
                                width:'27%',textAlign:'center'}}  >
                        HASAN MAHMUD
                    </NameItem>                   
                    <NormalItem style={{width:'50%',}}>
                        <Menu mode='horizontal' style={{backgroundColor:'#eee',textAlign:'center'}}>
                                <NormalItem key='a' style={{fontSize:20,fontFamily:'consolas'}}>                        
                                    Bio
                                </NormalItem>                    
                                
                                <NormalItem key='b' style={{fontSize:20,fontFamily:'consolas'}}>
                                    Blog
                                </NormalItem>                    

                                <SubMenuItem title="Projects" style={{fontSize:20,fontFamily:'consolas'}}>
                                    <Menu.Item key="setting:1" >Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </SubMenuItem>
                        </Menu>
                    </NormalItem>

               </Menu>           
            </Affix>
    )
}

export default MenuBar

