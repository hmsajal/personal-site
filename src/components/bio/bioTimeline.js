import React from 'react'
import {Timeline,Icon} from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.css'

const Div = styled.div`
      display:flex;
      flex-direction:column;
      align-items:center;     
      margin-bottom:50px;   
      width:100%; 
`
const HeadingDiv = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;  
      padding-bottom:20px;           
`
const h = window.innerHeight;

export default function bioTimeline() {
    return (
        <Div>            
            <HeadingDiv id="breadcrumb-timeline">
                <h3 style={{color:'#333',fontSize:16}}>My life timeline so far</h3>                                   
            </HeadingDiv>

            <Timeline mode="alternate" color="#60a677" pending="loading..." style={{width:'50%'}}>            
                <Timeline.Item color="#60a677">
                    Born in 1992.
                </Timeline.Item>    

                <Timeline.Item>
                    Started School in 1998 at Mitaly kindergarten
                </Timeline.Item>   

                <Timeline.Item color="#60a677">
                    Got admitted to New Holly Child Public School (K.G.)
                </Timeline.Item>  

                <Timeline.Item>
                    Started my High School in  Ideal School and Colledge Motijheel.
                </Timeline.Item>   

                <Timeline.Item color="#60a677">
                    Passed SSC and got admitted to Dhaka College in 2008
                </Timeline.Item>    

                <Timeline.Item>
                    Got admitted to Jahangirnagar University in 2011.
                </Timeline.Item>  

                <Timeline.Item color="#60a677">
                    Left Jahangirnagar University in 2017 after completing undergraduate and masters degree.
                </Timeline.Item> 

                <Timeline.Item>
                    Developed this site in 2019.
                </Timeline.Item>                
            </Timeline>
        </Div>
    )
}
