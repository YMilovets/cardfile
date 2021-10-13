import React from 'react'

export default function ListEmployeers(props) {
    return (
        <ul className="list-employeers list-group m-3 flex-grow-0 flex-shrink-0">
            {props.children}
        </ul>
    )
}
