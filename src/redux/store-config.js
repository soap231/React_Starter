import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter-reducer'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}

export default store