import {SAVE_USER_ADDRES} from '../constants/profileConstants';

export const  profileConstants = (state = {address}, action ) => {
    switch (action.type) {
        case SAVE_USER_ADDRES:
            return {
                ...state,
                address: action.payload
            }
            default:
            return state
}
}