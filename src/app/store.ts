import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "../module/counter-reducer";



const rootReducer = combineReducers({
    primState: counterReducer,
})

// создание store
export const store = configureStore({
    reducer: rootReducer,
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch
