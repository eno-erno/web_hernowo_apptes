import { GET_USER, DELETE_REDUX } from "../type";

export const getUser = () => dispatch => {
    fetch("https://simple-contact-crud.herokuapp.com/contact", {
        method: "GET",
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then(res => res.json())
    .then(response => {
        console.log(response);
        dispatch({type: GET_USER, payload: response.data})
    });
}

export const deleteRedux = () => dispatch => (
    dispatch({type: DELETE_REDUX})
)
