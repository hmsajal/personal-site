import React from 'react'
import styled from 'styled-components'

import BlogLeft from './blogLeft.js'
import BlogRight from './blogRight'

const Div = styled.div`
      padding: 30px 100px;
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
`

function BlogContent() {
    return (
        <Div>            
            <BlogLeft/>
            <BlogRight/>
        </Div>
    )
}
export default BlogContent