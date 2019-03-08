import { UPDATE_HEADER } from '../actions/types';

const INITIAL_STATE = {
    title: '',
    subtitle: '',
    hideBar: false
}

export default function (state = INITIAL_STATE, action){
    switch (action.type) {
        case UPDATE_HEADER:
            return {
                ...state,
                ...action.payload
            }
            
    
        default:
            return state;
    }
}