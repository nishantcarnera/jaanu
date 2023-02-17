import React from 'react'

// style
import {Side, List} from './style'

function Sidebar({data}) {
    return (
        <Side>
            <ul>
                {
                    data.map((item, index) => {
                        return <List key={index}>{item.name}</List>
                    })
                }
            </ul>
        </Side>
    )
}

export default Sidebar
