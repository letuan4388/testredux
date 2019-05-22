import { createStore } from 'redux'
import { reducer } from '../Reducers/Reducer'

const initialState = { tech: "Redux" };
export const store = createStore(reducer, initialState);