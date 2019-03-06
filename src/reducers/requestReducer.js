import {
    CHANGE_SELECTED_REQUEST_TYPE, 
    SET_REQUESTS
} from '../actions/types';

const INITIAL_STATE = {
    requests: [],
    selectedRequestType: 'Pending'
}

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case CHANGE_SELECTED_REQUEST_TYPE:
            const selectedRequestType = action.payload;
            return {
                ...state,
                selectedRequestType
            }

        case SET_REQUESTS:
            return {
                ...state,
                requests: action.payload
            }
        default:
            return state;
    }
}