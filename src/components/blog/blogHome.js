import React from 'react';
import styled from 'styled-components'

import MenuBar from '../common/menu'
import Section from '../bio/section'
import Footer from '../common/footer'
import BlogContent from './blogContent'


export default function BlogHome(props){    
     
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <MenuBar/>                
                <BlogContent/>                                               
                <Footer/>         
            </div>
        )    
}