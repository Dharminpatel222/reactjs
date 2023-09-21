import { configureStore } from "@reduxjs/toolkit";
import numberslice from "./Numberslice/numberslice";
import userslice from "./Numberslice/userslice";
import apislice from "./Numberslice/apislice";

const store = configureStore({
    reducer:{
        numberslice :numberslice,
        userslice : userslice,
        apislice : apislice
    }
})
export default store;