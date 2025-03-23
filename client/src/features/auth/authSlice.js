import { createSlice } from '@reduxjs/toolkit'

import * as AuthApi from "../../api/AuthRequest"

const initialState = {}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: async (action) => {
       try {
        const {data} = await AuthApi.logIn(action.payload)
       } catch (error) {
        console.log("Error in authSlice::", error)
       }
    },
    signUp: async (action) => {
        try {
         const {data} = await AuthApi.signUp(action.payload)
        } catch (error) {
         console.log("Error in authSlice::", error)
        }
     },
  },
})

// Action creators are generated for each case reducer function
export const { logIn,signUp } = authSlice.actions

export default authSlice.reducer