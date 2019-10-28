import React from 'react';

import MenuBar from './menuBar'
import MinusMenu from './minusMenu'


export default function AppComp(props){    
     
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <MenuBar/>
                <MinusMenu/>           
            </div>
        )    
}
