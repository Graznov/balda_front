import {combineReducers} from "@reduxjs/toolkit";
import defSlice from './defSlice.ts'
import styleSlice from "./styleSlise.ts";
import messageSlise from "./messageSlise.ts";

export const rootReduser = combineReducers({
    defSlice,
    styleSlice,
    messageSlise
})