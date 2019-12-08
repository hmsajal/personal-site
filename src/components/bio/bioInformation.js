import React from 'react'
import styled from 'styled-components'
import {Descriptions,Statistic} from 'antd'
import moment from  'moment';

const Div = styled.div`
      width:60%;      
      padding-left:10px;
      @media screen and (max-width:1024px){
          width:100%;
          margin-top:20px;
      };      
      display:flex;
      flex-direction:column;
      align-items:flex-start;             
`
const {Countdown} = Statistic;
export default function BioInformation() {
    return (
        <Div> 
            <Descriptions title="Basic Info" layout="vertical">
                    <Descriptions.Item label="Name">Hasan Mahmud</Descriptions.Item>
                    <Descriptions.Item label="Mobile">+8801672429529</Descriptions.Item>
                    <Descriptions.Item label="Residence">Dhaka, Bangladesh</Descriptions.Item>
                    <Descriptions.Item label="Age">
                     28 years                     
                    </Descriptions.Item>                                             
            </Descriptions>                   
        </Div>
    )
}
