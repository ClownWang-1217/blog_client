import React from 'react'
export default React.memo(function (props) {
    return (
        <div onClick = {props.onClick} className={'grid-item'}>{props.index}</div>
    )
})
