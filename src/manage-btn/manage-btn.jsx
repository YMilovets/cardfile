import React from 'react'
import {useDispatch} from "react-redux";

export default function ManageBtn(props) {
    const dispatch = useDispatch();
    const {selectId, data} = props;
    const prevHandler = () => {
        dispatch({type: "SET_PREV_SELECTED_ID"})
    }
    const nextHandler = () => {
        dispatch({type: "SET_NEXT_SELECTED_ID"})
    }
    return (
        <div>
            <button disabled={selectId <= 0}
                    onClick={prevHandler} 
                    type="submit" 
                    className="prev_btn btn btn-primary me-2">&lt;</button>
            <button disabled={selectId >= data.length - 1}
                    onClick={nextHandler} 
                    type="submit" 
                    className="next_btn btn btn-primary">&gt;</button>     
        </div>
    )
}
