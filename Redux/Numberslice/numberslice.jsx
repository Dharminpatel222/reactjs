import { createSlice } from "@reduxjs/toolkit";

 const numberslice = createSlice({
    name : "counter",
    initialState:{
        number:0,
    },
    reducers:{
        increment : (state,action)=>{
            state.number = state.number + Number(action.payload);
        },
        decrement : (state,action)=>{
            state.number = state.number - Number(action.payload);
        }

    }
 })
 export const {increment,decrement} = numberslice.actions;
export default numberslice.reducer;