import React from 'react';

import Footer from '../common/footer'
import BlogContent from './blogContent'

export default function BlogHome(props){    
     
        return(
            <div style={{display:'flex',flexDirection:'column'}}>                                         
                <BlogContent/>                                                                       
            </div>
        )    
}