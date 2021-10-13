import React from 'react'

export default function CardEmployeers(props) {
    let {name, 
        surname, 
        name_of_father, 
        vacancy, 
        birth, 
        employment} = props.data;
    const formatDate = (date) => {
        return new Date(+date).toLocaleString("ru", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
    return (
        <div className="mt-3 flex-grow-1">
            {props.children}
            <h1>
                <span>{name} </span>
                <span>{surname} </span>
                <span>{name_of_father}</span>
            </h1>
            <p><b>Должность:</b> {vacancy}</p>
            <p><b>Дата рождения:</b> {formatDate(birth)}</p>
            <p><b>Дата трудоустройства:</b> {formatDate(employment)}</p>
            <p><b>Возраст:</b> {new Date().getFullYear() - new Date(+birth).getFullYear()}</p>
            <p><b>Стаж:</b> {new Date().getFullYear() - new Date(+employment).getFullYear()}</p>
        </div>
    )
}
