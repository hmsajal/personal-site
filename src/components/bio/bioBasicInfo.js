import React,{Fragment} from 'react'
import {NavLink} from 'react-router-dom'

import styles from './bioBasicInfo.module.css'
import ProfileLinks from './bioProfileLinks'
import MyImage from '../common/myImage'


export default function BioBasicInfo(props){             
    return (
        <>                        
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
                <h4 className={styles.uiDivider}>Interests</h4>
                <div className={styles.interests}>                                        
                    <Interests heading="Favourite Topics" icon="book" item1="Philosophy" item2="Science"
                            item3="Human Nature"
                    >
                        <div className="item list">Technology</div>
                    </Interests>                                                              
                                    
                    <Interests heading="Movies or Series" icon="film" item1="Fight Club"
                            item3="Interstellar" item2="Pulp Fiction"
                    >
                        <div className="item list">Breaking Bad</div>
                        <div className="item list">Game of Thrones</div>
                    </Interests>                                        
                                    
                    <Interests heading="People I Envy" icon="users" item1="Rabindranath Tagore"
                            item2="Steve Jobs" item3="Christopher Nolan"
                    >
                        <div className="item list">Mahmudul Hasan Sohag</div>                        
                    </Interests>                                        
                </div>                                                                                                                                                                                                                                                  
            </div>  


            <div className={styles.profileLinksDiv}>
               <ProfileLinks/>
            </div>
        </>               
    )        
}



const Init = () => {
    return(
        <p>                              
          I am Hasan Mahmud Sajal and this is my portfolio site. As you're already surfing my site the probability 
          is high that you know me. By the way, in this section I am supposed to introduce myself. But the irony
          is, it's not possible to know someone from a couple of words which are told by the person himself/herself. 
          <br/>But I can tell you my personality type. I think it is much information in a very short form and 
          my personality type is INFP.          
        </p>
    )
}

const Decl = () => {
    return(
        <div style={{padding:'40px 0px',fontSize:'15px',textAlign:'justify',textJustify:'auto'}}>
            This page is sort of the ABOUT ME section of any social networking site profile. 
            So it's intended for only those who are interested about me as a person. Are you? 
            Then go through the following facts and other information about me.
            <p style={{paddingTop:"20px",fontSize:"15px",color:'#666'}}>
                If you want to know about my career interest, please visit the
                <NavLink style={{color:'green'}} to="/career"> CAREER</NavLink> page.
            </p>
        </div>
    )
}

const Interests = (props) => {
    return(
        <div className="ui item" style={{marginBottom:"30px"}}>
            <h3 className="ui header">
                <i className={`ui ${props.icon} icon`}></i>
                <div className="content">
                    {props.heading}
                </div>                
            </h3> 
            <div className="ui content bulleted list">                    
                <div className="item list">{props.item1}</div> 
                <div className="item list">{props.item2}</div> 
                <div className="item list">{props.item3}</div>
                {props.children}                             
            </div>                   
        </div>
    )
}            