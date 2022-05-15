import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id:''
}

export const counterSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    addText: (state,{payload}) => {
    state.id=payload
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addText} = counterSlice.actions

export default counterSlice.reducer