import React from 'react'
import styled,{ThemeProvider} from 'styled-components'

import MenuBar from '../common/menu'
import Footer from '../common/footer'
     
const theme = {
    currentItemRoute: '/career',        
    currentItemColor:'#001b64bb',
    otherItemsColor:'#fdfdfd'
}

export default function CareerHome(props) {
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <ThemeProvider theme={theme}>
                    <MenuBar scaleOfHundredHeight={11} colorBack="#60a677"  
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

