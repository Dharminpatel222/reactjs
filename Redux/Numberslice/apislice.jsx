import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

    export const getproduct =  createAsyncThunk(`get/apiproduct`,async()=>{
        try {
            const response = await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/search.php?s`
            );
            const data = await response.json()
            return data;
        } catch (error) {
            console.log("error",error)
        }
    })

 const apislice = createSlice({
    name : "api",
    initialState : {
        isloading : true,
        product : [],
    },
    reducers : {

    },
    extraReducers : {
        [getproduct.pending] :(state,action)=>{
            state.isloading = true;
        },
        [getproduct.fulfilled] : (state,action)=>{
            state.isloading = false;
            state.product = action.payload
        },
        [getproduct.rejected] : (state,action)=>{
            state.isloading = false;
        }
    }

 })
 export default apislice.reducer