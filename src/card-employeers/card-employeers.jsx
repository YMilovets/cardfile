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
    const formatCalcDate = (start) => {
        const now = Date.now();
        const stamp = new Date(new Date().getFullYear(), new Date(+start).getMonth(), new Date(+start).getDate()).getTime();

        return new Date().getFullYear() - new Date(+start).getFullYear() + ((now - stamp) > 0 ? 0 : 1);
    }
    return (
        <div className="mt-3 flex-grow-1">
            {props.children}
            <h1>
                <span>{surname} </span>
                <span>{name} </span>
                <span>{name_of_father}</span>
            </h1>
            <p><b>Должность:</b> {vacancy}</p>
            <p><b>Дата рождения:</b> {formatDate(birth)}</p>
            <p><b>Дата трудоустройства:</b> {formatDate(employment)}</p>
            <p><b>Возраст (лет):</b> {formatCalcDate(birth)}</p>
            <p><b>Стаж (лет):</b> {formatCalcDate(employment)}</p>
        </div>
    )
}
