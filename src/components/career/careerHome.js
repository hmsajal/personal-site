import React from 'react'
import {Button} from 'antd'
     
export default function CareerHome(props) {
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:280}}>                       
                 <h3 style={{alignSelf:'center',fontSize:'18px',fontStyle:'italic'}}>
                     My career and skills information is not available here so far and going to be added soon.
                     <br/> 
                     Click the link below if you are a recruiter and want to see my resume.<br/><br/>
                </h3>
                <Button href="https://drive.google.com/file/d/1rPqdKqwNUIsl4vQ-HOX6NfK28pmD6tct/view?usp=sharing"
                        style={{background:'#60a677',color:"#f2f2f2"}}>Resume</Button>
        </div>
    )
}

