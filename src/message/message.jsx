import React from 'react'

export default function Message(props) {
    return (
        <p className="message m-3">
            {props.children}
        </p>
    )
}
