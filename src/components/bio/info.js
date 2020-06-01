import React,{Fragment} from 'react'
import {NavLink} from 'react-router-dom'

export const Init = () => {
    return(
        <Fragment>
            <p style={{color:'#556b2f'}}>                              
            I am Hasan Mahmud Sajal and this is my portfolio site. In this section I am supposed to introduce myself.
            But the irony is I don't believe in 'intro'. That's a facebook thing, I think.
            Rather I am just sharing some short info about me. And it's my pleasure that you've been reading so far.                   
            </p>
            <p style={{fontSize:"15px",color:'#666'}}>
                If you want to know about my career interest, please visit the
                <NavLink style={{color:'green'}} to="/career"> CAREER</NavLink> page.
            </p>
        </Fragment>
    )
}

export const ShortInfo = ()=>{
    return(
        <div style={{padding:'30px 0px'}}>
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

export const Decl = () => {
    return(
        <div style={{padding:'30px 0px',fontSize:'15px',textAlign:'justify',textJustify:'auto'}}>
            And if you are a bit more interested here are some random but organized information and facts
            about me that you might go through-           
        </div>
    )
}

export const Interest = (props) => {
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