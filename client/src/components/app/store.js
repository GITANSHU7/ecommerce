import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "../../components/features/addressSlice"

export default configureStore({
    reducer:{
        address: addressReducer
    }
})
