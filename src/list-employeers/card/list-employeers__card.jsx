import React from 'react'
import './list-employeers__card.css'

export default function ListCard(props) {
    let {name, 
        surname, 
        name_of_father, vacancy} = props.data;
    const selectHandler = (id) => {
        props.setSelectId(id);
    }
    return (
        <li onClick={selectHandler.bind(null, props.id)} 
            className="list-employeers__card list-group-item">
            {surname} {name} {name_of_father}
            <div className="text-muted">{vacancy}</div>
        </li>
    )
}
