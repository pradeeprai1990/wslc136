import { configureStore } from '@reduxjs/toolkit'
import counterslice  from '../slice/counterSlice'

export const store=configureStore({
    reducer:{
        counterReducer:counterslice,
        
    }
})