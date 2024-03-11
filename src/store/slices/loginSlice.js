import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    status: 'checking',
    user: {},
    errorMessage: undefined
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking'
      state.user = {}
      state.errorMessage = undefined
    },
    onLogin: (state, action) => {
      state.status = 'authenticated'
      state.user = action.payload
      state.errorMessage = undefined
    },
    onLogout: (state, action) => {
      state.status = 'not-authenticated',
      state.user = {},
      state.errorMessage = action.payload
    },
    clearErrorMessage: (state, action) => {
      state.errorMessage = undefined
    },
    onAddLink: (state, action) => {
      state.user = action.payload
    }

  }
})


// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage, onAddLink} = loginSlice.actions