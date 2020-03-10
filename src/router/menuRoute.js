import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

import {store}  from '../store'
import Home from '../components/home/home'
import Menu from '../components/common/menu'
import BioHome from '../components/bio/bioHome'
import BlogHome from '../components/blog/blogHome'
import CareerHome from '../components/career/careerHome'
import styles from './menuRoute.module.css'


export default function MenuRoute(){    
    
    const {dispatch} = React.useContext(store)
             
    React.useEffect(() =>{ 
        window.addEventListener("scroll",handleScroll)
        
        let prevScrollPos = 0
        
        function handleScroll(){                
            const currentScrollPos = window.pageYOffset            
            const scrollState = currentScrollPos - prevScrollPos    
            dispatch({type:'PageScrollDown',scrollDown:scrollState})                  
            if(scrollState>0){
                document.getElementsById("menu").style.top =  '-11vh'                 
            }
            else document.getElementsById("menu").style.top = '0px';
             
            prevScrollPos = currentScrollPos                
        }            

        return ()=>window.removeEventListener("scroll",handleScroll)
    },[])
    
    
    return(
        <Router>  
            <Switch>                
                <Route path="/:link">
                  <div>                  
                    <div id="menu" className={styles.menu}>                                                
                        <Menu/>                                
                    </div>                            
                    <div className={styles.routes}>
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
                    </div>                
                  </div>                
                </Route>    
                <Route path="/">
                    <Home/>
                </Route>        
            </Switch>                      
        </Router>        
    )
}

