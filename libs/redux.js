import { createSlice, configureStore } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid/non-secure'

const counterSlice = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
    addQuestion: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: ({ type, text }) => {
        const id = nanoid()
        return { payload: { id, type, text } }
      },
    },
    removeQuestion: {
      reducer: (state, action) => {
        return (state = state.filter((question) => question.id !== action.payload.id))
      },
      prepare: ({ id }) => {
        return { payload: { id } }
      },
    },
    clearQuestions: (state) => {
      return (state = [])
    },
  },
})

const store = configureStore({
  reducer: counterSlice.reducer,
  devTools: true,
})

export const { clearQuestions, addQuestion, removeQuestion } = counterSlice.actions
export { store }
