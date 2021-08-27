  {/*
import axios from 'axios'

import  { REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL } from '../constants/userConstants';

   

    export const register = (userData) => async (dispatch) => {
        try {
    
            dispatch({ type: REGISTER_USER_REQUEST })
    
            const config = {
                headers: {
                    authtoken,
                  },
            }
    
            const { data } = await axios.post(`${process.env.REACT_APP_API}/user/contact`, userData, config)
    
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: data.user
            })
    
        } catch (error) {
            dispatch({
                type: REGISTER_USER_FAIL,
                payload: error.response.data.message
            })
        }
    }

    // Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}*/}