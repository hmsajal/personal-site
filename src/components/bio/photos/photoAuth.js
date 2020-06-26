import React,{Fragment,useState} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import styles from './photoAuth.module.css'


export default function PhotoAuth(props){
 
    let [nameValue,setNameValue] = useState('')
    let [codeValue,setCodeValue] = useState('')
    let [errMsg, setErrMsg] = useState('')
    let history = useHistory()

    function handleNameChange(eventVar){
        setNameValue(eventVar.target.value);        
    }
    function handleCodeChange(eventVar){
        setCodeValue(eventVar.target.value);        
    }

    function handleClick(){        
        const lngth = nameValue.length        
        const finalValue =  (lngth%2+7) + "" + (lngth + 35) + "" + lngth; 

        if(codeValue===finalValue){
            Cookies.set("hms",codeValue) 
            setErrMsg("") 
            history.push("/bio/photos")            
        }
        else {            
            setErrMsg("Sorry! Wrong Combination!")
        }
    }

    return(
        <Fragment>
            <h3 className={styles.header}>
                    My Photos
            </h3>
            <div className={styles.authIntro}>
                My photos also include my friends and family. So those are not open to all. 
                <br/>Just prove that I've let you go through.
            </div>
            <div className={styles.formDiv}>
                <div className="ui form" style={{width:200}}>
                    <div className={styles.error}>
                        {errMsg}
                    </div>
                    <div className="ui field" >
                        <label>Write down your nickname</label>
                        <input type="text" value={nameValue} onChange={(Event)=>handleNameChange(Event)}/>
                    </div>        
                                        
                    <div className="ui field">
                        <label>And the short code given by me for this purpose</label>
                        <input type="text" value={codeValue} onChange={(Event)=>handleCodeChange(Event)}/>
                    </div>
                    <div className={styles.buttonDiv}>
                        <button className="ui submit button large" onClick={()=>handleClick()}>
                            Submit
                        </button>     
                    </div>                                                                           
                </div>      
            </div>                                        
        </Fragment>        
    )
}