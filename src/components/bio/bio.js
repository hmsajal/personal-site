import React from 'react';

import MenuBar from '../common/menu'
import MainPart from './mainPart'
import Footer from  '../common/footer'



export default function Bio(props){    
     
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <MenuBar/>
                <MainPart/>
                <Footer/>           
            </div>
        )    
}
