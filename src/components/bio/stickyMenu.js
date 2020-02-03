import React from 'react'
import {Breadcrumb,Icon} from 'antd'

import {store} from '../../store.js'

export default function StickyMenu() {
    
    const globalState = React.useContext(store)          
    const {state} = globalState; 

    return (                    
            <Breadcrumb  separator="|" style={{padding:"5px",justifyContent:'center',display:'flex',zIndex:4,
                             alignSelf:'center',color:'#333',transition:'.3s',position:'fixed',                         
                             background:'linear-gradient(to right,#d0f0c0,#50c888,#d0f0c0)',                             
                             width: '100%',                             
                             top: state.scrollDown>0 ? 0 : window.innerHeight*.12                                                          
                             }}>
                        <Breadcrumb.Item className="breadcrumb" style={{margin:'0px 3px'}}
                                         onClick={()=>{ document.getElementById("basicInfo").style.display="flex"
                                                        document.getElementById("timeline").style.display="none"
                                                        document.getElementById("photos").style.display="none"    
                                                        document.getElementById("basicInfo").style.animationDuration="2s"                                                                                                                    
                                                    }}
                        >
                            <Icon type="user" />                                
                            <span> BASIC INFO</span>                                
                        </Breadcrumb.Item>

                        <Breadcrumb.Item className="breadcrumb" style={{margin:'0px 3px'}} 
                                         onClick={()=>{ document.getElementById("basicInfo").style.display="none"
                                                        document.getElementById("timeline").style.display="flex"
                                                        document.getElementById("photos").style.display="none"    }}
                        >                                
                            <Icon type="clock-circle" />
                            <span> TIMELINE</span>                                
                        </Breadcrumb.Item>

                        <Breadcrumb.Item className="breadcrumb" style={{margin:'0px 3px'}}
                                         onClick={()=>{ document.getElementById("basicInfo").style.display="none"
                                                        document.getElementById("timeline").style.display="none"
                                                        document.getElementById("photos").style.display="flex"         }}
                        >                                
                            <Icon type="picture" />
                            <span> PHOTOS</span>
                        </Breadcrumb.Item>
            </Breadcrumb>                 
    )
}
