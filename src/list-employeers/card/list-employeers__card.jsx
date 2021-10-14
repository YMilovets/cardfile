import React from 'react'
import './list-employeers__card.css'
import {useDispatch, useSelector} from "react-redux";

export default function ListCard(props) {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state);

    let {name, 
        surname, 
        name_of_father, vacancy} = props.data;
    const selectHandler = (id) => {
        dispatch({type: "SET_SELECTED_ID", payload: id})
    }
    return (
        <li onClick={selectHandler.bind(null, props.id)} 
            className="list-employeers__card list-group-item">
            {surname} {name} {name_of_father}
            <div className="text-muted">{vacancy}</div>
        </li>
    )
}
