import React from 'react'
import {NavLink} from 'react-router-dom'

import styles from './bioBasicInfo.module.css'
import MyImage from '../common/myImage'


export default function BioBasicInfo(props){             
    return (                           
            <div className={styles.main} id="bioBasicInfo">                                                               
                <div className={styles.imgParaDiv}>
                    <div className={styles.myImageDiv}>
                       <MyImage imgWidth="120px"/>            
                    </div>        
                    <div className={styles.paraDiv}>                        
                        <Init/>                   
                    </div>                    
                </div>                  
                <Decl/>                 
                <div className="ui item">                                        
                    <Interest heading="Favourite Topics" icon="book" item1="Philosophy" item2="Science"
                            item3="Human Nature" item4='Technology'
                    >                        
                    </Interest>                                                              
                                    
                    <Interest heading="Movies or Series" icon="film" item1="Fight Club"
                               item2="Pulp Fiction" item3="Interstellar" item4="Breaking Bad"
                    >                        
                        <div className="item list">Game of Thrones</div>
                    </Interest>                                        
                                    
                    <Interest heading="People I Envy" icon="users" item1="Rabindranath Tagore"
                            item2="Steve Jobs" item3="Christopher Nolan" item4="Bill Gates"
                    >                         
                    </Interest>                                        
                </div>                                                                                                                                                                                                                                                  
            </div>                 
    )        
}



const Init = () => {
    return(
        <p>                              
          I am Hasan Mahmud Sajal and this is my portfolio site. As you're already surfing my site the probability 
          is high that you know me. In this section I am supposed to introduce myself. But the irony
          is, it's not possible to know someone from a couple of words which are told by the person himself/herself. 
          <br/>But I can tell you my personality type. I think it is much information in a very short form and 
          my personality type is INFP.          
        </p>
    )
}

const Decl = () => {
    return(
        <div style={{padding:'40px 0px 70px 0px',fontSize:'15px',textAlign:'justify',textJustify:'auto'}}>
            And if you are a bit more interested here are some random information and facts
            about me that you might go through.
            <p style={{paddingTop:"20px",fontSize:"15px",color:'#666'}}>
                If you want to know about my career interest, please visit the
                <NavLink style={{color:'green'}} to="/career"> CAREER</NavLink> page.
            </p>
        </div>
    )
}

const Interest = (props) => {
    return(
        <div className="ui item" style={{marginBottom:40}}>
            <h3 className="ui top attached header">
                <i className={`ui ${props.icon} icon`}></i>
                <div className="content">
                    {props.heading}
                </div>                
            </h3> 
            <div className="ui segment attached padded bulleted list">                    
                <div className="item list">{props.item1}</div> 
                <div className="item list">{props.item2}</div> 
                <div className="item list">{props.item3}</div>
                <div className="item list">{props.item4}</div>
                {props.children}                             
            </div>                               
        </div>
    )
}            