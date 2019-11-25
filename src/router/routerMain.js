import React from 'react'
import {BrowserRouter,Switch,Route,useRouteMatch,useParams} from 'react-router-dom'


import Menu from '../components/common/menu'
import Home from '../components/home/home'
import Bio from '../components/bio/bioHome'
import Blog from '../components/blog/blogHome'
import Career from '../components/career/careerHome'

const theme = {
    currentItemRoute: '/bio',    
    currentItemColor:'#001b64bb',
    otherItemsColor:'#fdfdfd'
}

export default function RouterMain() {
    return (
        <BrowserRouter>               
                <Switch>  
                    <Route path="/" exact component={Home}/>                  
                    <Route path="/site">
                         <ComponentWithMenu/>
                    </Route>                                                                           
                </Switch>                                                                  
        </BrowserRouter>
    )    
}

export function ComponentWithMenu(){
        let {url,path} = useRouteMatch()

    return(
            <div>
                <div>what are you doing?</div>
                {/* <ThemeProvider theme={theme}>
                        <Menu    scaleOfHundredHeight={11} colorBack="#60a677"
                                    routeProp1={{link:'/bio',name:'About Me'}}
                                    routeProp2={{link:'/blog',name:'Blog'}}
                                    routeProp3={{link:'/career',name:'Career and Crafts'}}  
                                    routeProp4={{}}
                        />                                
                </ThemeProvider>  */}           
            
                <Switch>
                    
                <Route path={`${path}/:compId`}>
                    <MyComponent/>
                </Route>                
                </Switch>                   
            </div>      
    )
}

export function MyComponent(){
        let {compId} = useParams()
    return(
        
        <div>what are you doing?</div>
    )

}
