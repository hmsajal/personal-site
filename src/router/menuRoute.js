import React,{useState} from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {Affix} from 'antd'

import Menu from '../components/common/menu'
import BioHome from '../components/bio/bioHome'
import BlogHome from '../components/blog/blogHome'
import CareerHome from '../components/career/careerHome'

const MenuDiv = styled.div`
      position:fixed;
      z-index:1;
      width:100%;
      top:0;      
      transition:top .3s;
`
const Div = styled.div`
      position:relative;
`
const h = window.innerHeight*.11;

export default function MenuRoute(){   
     
    const [preScrollPos,setPreScrollPos] = useState(window.pageYOffset)   
    addEventListener("scroll",()=>handleScroll())

    function handleScroll(){
        var currentScrollPos = window.pageYOffset;

        if(preScrollPos<currentScrollPos){
            document.getElementById("menu").style.top= -h+'px'      
            document.getElementById("bioBreadcrumb").style.top = 0    
        }
        else if(preScrollPos>currentScrollPos){
            document.getElementById("menu").style.top=0     
            document.getElementById("bioBreadcrumb").style.top = h + 'px'         
        }
    
        setPreScrollPos(currentScrollPos)
    }

    return(
        <Router>
            <div>    
                <MenuDiv id="menu">
                    <Menu/>                                
                </MenuDiv>            
                
                <Div id = "notMenu" style={{top:window.innerHeight*.11}}>
                    <Switch>
                        <Route path="/bio">
                            <BioHome/>
                        </Route>
                        <Route path="/blog">
                            <BlogHome/>
                        </Route> 
                        <Route path="/career">
                            <CareerHome/>
                        </Route>                  
                    </Switch>
                </Div>
            </div>
        </Router>        
    )
}

