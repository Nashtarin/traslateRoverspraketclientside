import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/textSlice'

export const store = configureStore({
  reducer: {counter: counterReducer},
})