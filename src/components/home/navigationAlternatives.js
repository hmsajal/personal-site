import React,{useState} from 'react'
import styled from 'styled-components'
import {BrowserRouter,NavLink} from 'react-router-dom'
import {Drawer,Button, Icon} from 'antd'

const NavButtonDiv = styled.div`      
      .navigationButton{
          border-color:#333;
          border-width:2px;
      };      
      margin-right:60px;      

      @media screen and (max-width:640px){
          margin-right:30px;
      }

      @media screen and (min-width:641px) and (max-width:1099px){
          margin-right:50px;
      }
`

const NavItemsGroup = styled.nav`
      width:420px;                  
      display:flex;      
      justify-content:space-evenly;
      align-items:center;  
      height:100%;      
      padding-right:20px;                     
`
const StyledNavLink = styled(NavLink)`
      color:#214;      
      font-size:22px;  
      font-family:lato;    
      
          :hover{
              color:#ddd;
          }        
`


export function NavMenu(){
    return(
        <NavItemsGroup>            
            <StyledNavLink to="site/bio" >
                Bio
            </StyledNavLink>                

            <StyledNavLink to="site/career">
                Career
            </StyledNavLink>

            <StyledNavLink to="site/blog" >
                Blog
            </StyledNavLink>
        </NavItemsGroup>
    )
}

export function NavBar(){

    const [visibleState, setVisibleState] = useState(false)
    
    return(
        <NavButtonDiv>
            <Button className="navigationButton" type="default" onClick={()=>setVisibleState(true)} 
                    style={{background:'#008081',width:"25px",height:"33px",
                            display:'flex',justifyContent:'center'
                           }}
            >
                <Icon type="menu" style={{fontSize:18}}/>
            </Button>

            <Drawer                                
                placement="right"
                closable={false}
                onClose={()=>setVisibleState(false)}
                visible={visibleState}
                drawerStyle={{backgroundColor:"#90ee90"}}
            >
                    <p>Bio</p>
                    <p>Career</p>
                    <p>Blog</p>
            </Drawer>
        </NavButtonDiv>
    )
}

