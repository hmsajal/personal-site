import React from 'react'
import {Tabs} from 'antd'

import Info from './bioBasicInfo'
import Photos from './bioPhotos'

const {TabPane} = Tabs;


export default function BioTabView() {
    return (        
            <Tabs defaultActiveKey="1">
                <TabPane tab="Basic Info" key="1">
                    <Info/>
                </TabPane>

                <TabPane tab="Photos" key="2">
                    <Photos/>
                </TabPane>                
            </Tabs>        
    )
}
