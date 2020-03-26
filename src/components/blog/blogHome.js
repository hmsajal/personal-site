import React,{useContext,useEffect} from 'react'

import BlogContent from './blogContent'
import Footer from '../common/footer'
import styles from './blogHome.module.css'

export default function BlogHome(props){    
     
        return(
            <div>
                <div className={styles.main}>                                         
                    <BlogContent/>                                                                                
                </div>
                <Footer/>           
            </div>
            
        )    
}