import React from 'react'

export default function ManageBtn(props) {
    const {actions, selectId, data} = props;
    return (
        <div>
            <button disabled={selectId <= 0}
                    onClick={actions.prevHandler} 
                    type="submit" 
                    className="prev_btn btn btn-primary me-2">&lt;</button>
            <button disabled={selectId >= data.length - 1}
                    onClick={actions.nextHandler} 
                    type="submit" 
                    className="next_btn btn btn-primary">&gt;</button>     
        </div>
    )
}
