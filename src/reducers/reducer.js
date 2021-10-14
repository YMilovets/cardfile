let defaultState = {
    result: [],
    selectId: 0,
    status: "pending"
}
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_DATA_SUCCESS":
            return {...state, result: action.payload, status: "success"}
        case "SET_DATA_ERROR":
            return {...state, result: action.payload, status: "error"}
        case "SET_NEXT_SELECTED_ID":
            return {
                ...state, 
                selectId: (state.selectId < state.result.length - 1) ? state.selectId + 1 : state.result.length - 1
            }
        case "SET_PREV_SELECTED_ID":
            return {
                ...state, 
                selectId: (state.selectId > 0) ? state.selectId - 1 : 0
            }
        case "SET_SELECTED_ID":
            return {
                ...state, 
                selectId: action.payload
            }
        default:
            return state
    }
}