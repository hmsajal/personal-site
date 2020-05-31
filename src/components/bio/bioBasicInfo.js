import React,{Fragment} from 'react'
import {NavLink} from 'react-router-dom'

import styles from './bioBasicInfo.module.css'
import MyImage from '../common/myImage'


export default function BioBasicInfo(props){             
    return (                           
            <div className={styles.main} id="bioBasicInfo">                                                               
                <div className={styles.imgParaDiv}>
                    <div className={styles.myImageDiv}>
                       <MyImage imgWidth="250px"/>            
                    </div>        
                    <div className={styles.paraDiv}>                        
                        <Init/>                   
                    </div>                    
                </div>    
                <ShortInfo/>              
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
        <Fragment>
            <p>                              
            I am Hasan Mahmud Sajal and this is my portfolio site. In this section I am supposed to introduce myself.
            But the irony is I don't believe in 'intro'. That's a facebook thing, I think.
            Rather I am just sharing some short info about me. And it's my pleasure that you've been reading so far.                   
            </p>
            <p style={{fontSize:"14px",color:'#666'}}>
                If you want to know about my career interest, please visit the
                <NavLink style={{color:'green'}} to="/career"> CAREER</NavLink> page.
            </p>
        </Fragment>
    )
}

const ShortInfo = ()=>{
    return(
        <div className={styles.shortInfo}>
            <div>
               <h4 style={{display:'inline-block'}}>Personality Type: </h4>
               <pre style={{display:'inline-block'}}>  INFP</pre>
            </div>
            <div>
               <h4 style={{display:'inline-block'}}>Tech: </h4> 
               <pre style={{display:'inline-block'}}>  JavaScript</pre>
            </div>
            <div>
               <h4 style={{display:'inline-block'}}>BG: </h4> 
               <pre style={{display:'inline-block'}}>  A+</pre>
            </div>
            <div>
               <h4 style={{display:'inline-block'}}>Covid-19 Status: </h4> 
               <pre style={{display:'inline-block'}}>  Not tested</pre>            
            </div>
        </div>
    )
}

const Decl = () => {
    return(
        <div style={{padding:'30px 0px',fontSize:'15px',textAlign:'justify',textJustify:'auto'}}>
            And if you are a bit more interested here are some random but organized information and facts
            about me that you might go through-           
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