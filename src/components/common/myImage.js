import React from 'react'
import {Avatar} from 'antd'

import MyPhoto from '../../assets/images/myPhoto.jpg'


export default function MyImage(){
    return(
        <Avatar src={MyPhoto} size={120} shape={"circle"}/>        
    )
}
