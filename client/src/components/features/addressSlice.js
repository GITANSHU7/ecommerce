import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
    name : "address",
    initialState:{
        address : null
    },
    reducers:{
        addAddress : (state,action) => {
            state.address = action.payload;
        },
        removeAddress: (state) => {
            state.address = null
        },
    }
})

export const {addAddress , removeAddress} = addressSlice.actions;

export const SelectAddress = (state) => state.address.address;

export default addressSlice.reducer;