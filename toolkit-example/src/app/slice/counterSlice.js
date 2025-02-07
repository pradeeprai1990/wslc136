import { createSlice } from '@reduxjs/toolkit'

export let counterslice=createSlice({
    name:"counter",
    initialState:{
        count:10
    },
    reducers:{
        countIncrement:(oldState,reqData)=>{
            oldState.count+=1
        },
        countDecrement:(oldState,reqData)=>{
            oldState.count-=1
        }
    }
})

export  let {countIncrement,countDecrement}=counterslice.actions
export default counterslice.reducer