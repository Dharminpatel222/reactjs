import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name : "user",
    initialState : {
        firstname : "Dharmin",
        lastname : "Patel"
    },
    reducers:{
        changeFirstname : (state,action)=>{
            // state.firstname = "Nihar";
            // state.lastname = "------"

               state.firstname = action.payload.firstname; // payload and action used for additional value add
               state.lastname = action.payload.lastname;
        }
    }
})
export const {changeFirstname} = userslice.actions;
export default userslice.reducer;