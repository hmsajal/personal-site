import React from 'react';

import MenuBar from '../common/menuBar'
import MinusMenu from './minusMenu'


export default function Bio(props){    
     
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <MenuBar/>
                <MinusMenu/>           
            </div>
        )    
}
