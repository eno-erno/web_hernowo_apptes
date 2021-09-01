import { GET_USER, DELETE_REDUX } from "../type";

const initialState = {
    contact : [],
    user: {}
}

export default (state = initialState, action) =>{
    switch (action.type){
        case GET_USER :
            return {
                ...state,
                contact : [action.payload]
            }
        case DELETE_REDUX : 
            return {
                contact: []
            }
        default :
            return state;
    }
}