const fetchQuery = () => {
    const src = "https://ymilovets.github.io/cardfile/employeers.json";
    return fetch(src).then(res => res.json())
}
const wrapFetch = (promise, dispatch) => {
    promise.then(
        data => {
            dispatch({type: "SET_DATA_SUCCESS", payload: data})
        }
    ).catch( err => {
        dispatch({type: "SET_DATA_ERROR", payload: err.message})
    })
}
export default function UseResource(dispatch) {
    return wrapFetch(fetchQuery(), dispatch);
}