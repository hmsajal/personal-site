import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Drawer,Button, Icon} from 'antd'

const NavButtonDiv = styled.div`      
      .navigationButton{
          border-color:#333;
          border-width:2px;
      };      
`

const NavItemsGroup = styled.nav`
      width:280px;                  
      display:flex;      
      justify-content:space-between;
      align-items:center;  
      height:100%;                            
`
const StyledLink = styled(Link)`
      color:#214;      
      font-size:22px;  
      font-family:lato;    
      
          :hover{
              color:#ccc;
          }        
`


export function NavMenu(){
    return(
        <NavItemsGroup>            
            <StyledLink to="/bio" >
                Bio
            </StyledLink>                

            <StyledLink to="/career">
                Career
            </StyledLink>

            <StyledLink to="/blog" >
                Blog
            </StyledLink>
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
                drawerStyle={{backgroundColor:"#666"}}
            >
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-evenly',
                     color:'black',height:100}}>
                        <Link to="/bio">Bio</Link>
                        <Link to="/career">Career and Skills</Link>
                        <Link to="/blog">Blog</Link>  
                </div>                    
            </Drawer>
        </NavButtonDiv>
    )
}

