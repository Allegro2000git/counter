
import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    startValue: 0,
    maxValue: 5,
}

export const IncrementAC = createAction('counter/Increment');
export const ResetAC = createAction<{startValue: number}>('counter/Reset');
export const SetCountAC = createAction<{count: number}>('counter/SetCount');
export const SetLocalStartValueAC = createAction<{startValue: number}>('counter/SetLocalStartValueAC');
export const SetLocalMaxValueAC = createAction<{maxValue: number}>('counter/SetLocalMaxValueAC');

export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(IncrementAC, (state) => {
            state.count +=  1;
        })
        .addCase(ResetAC, (state, action) => {
            state.count = action.payload.startValue
        })
        .addCase(SetCountAC, (state, action) => {
            state.count = action.payload.count;
        })
        .addCase(SetLocalStartValueAC, (state, action) => {
            state.startValue = action.payload.startValue;
        })
        .addCase(SetLocalMaxValueAC, (state, action) => {
            state.maxValue= action.payload.maxValue;
        })
})

