

    import  { REGISTER_USER_REQUEST,
        REGISTER_USER_SUCCESS,
        REGISTER_USER_FAIL } from '../constants/userConstants';

    
export const userDetailsReducer = (state = {} , action) => {
    switch (action.type) {

        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case  REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case   REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}