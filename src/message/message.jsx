import React from 'react'

export default function Message(props) {
    return (
        <p className="m-3">
            {props.children}
        </p>
    )
}
