import React from 'react'
import styled,{ThemeProvider} from 'styled-components'

import MenuBar from '../common/menu'
import Footer from '../common/footer'
     
const theme = {
    currentItemRoute: '/career',
    currentItemColor:'white',
    currentItemBack:'#60a677'
}

export default function CareerHome(props) {
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <ThemeProvider theme={theme}>
                    <MenuBar scaleOfHundredHeight={11} colorBack="white"  
                             routeProp1={{link:'bio',name:'About Me'}}
                             routeProp2={{link:'blog',name:'Blog'}}
                             routeProp3={{link:'career',name:'Career and Crafts'}}  
                             routeProp4={{}}
                    />  
            </ThemeProvider>              
            <Footer/>         
        </div>
    )
}

