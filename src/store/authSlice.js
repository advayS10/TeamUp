import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: !!localStorage.getItem("authToken"),
    // userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true
            // state.userData = action.payload
        },
        logout: (state) => {
            state.status = false
            localStorage.removeItem("authToken")
            // state.userData = null
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer