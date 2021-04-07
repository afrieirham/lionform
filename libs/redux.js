import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import * as SecureStore from 'expo-secure-store'

export const setIntialState = createAsyncThunk('questions/setIntialState', async () => {
  const rawQuestions = await SecureStore.getItemAsync('questions')

  return rawQuestions ? JSON.parse(rawQuestions) : []
})

export const clearQuestions = createAsyncThunk('questions/clearQuestions', async () => {
  await SecureStore.deleteItemAsync('questions')
  return []
})

const counterSlice = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
    addQuestion: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: ({ id, type, text }) => {
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
  },
  extraReducers: {
    [setIntialState.fulfilled]: (state, action) => {
      return (state = action.payload)
    },
    [clearQuestions.fulfilled]: (state) => {
      return (state = [])
    },
  },
})

const store = configureStore({
  reducer: counterSlice.reducer,
  devTools: true,
})

export const { addQuestion, removeQuestion } = counterSlice.actions
export { store }
