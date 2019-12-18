import React from 'react'
import {Timeline} from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.css'

const Div = styled.div`
      display:flex;
      flex-direction:column;
      align-items:center;            
      width:100%; 
`


export default function bioTimeline() {
    return (
        <Div>            
            <div id="timeline" className="bioHeading">
                <h3 style={{transform:'skew(15deg)'}}>
                    My timeline
                </h3>      
            </div>

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
