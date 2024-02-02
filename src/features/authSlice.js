import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
      user: null,
      token: null,
      profilePicture: null,
      localId: null,
      userData: {
        nombre: null,
        apellido: null,
        direccion: null,
        localidad: null
      }
    },
    reducers:{
      setUser: (state, action) => {
        state.user = action.payload.email,
        state.token = action.payload.idToken,
        state.localId = action.payload.localId
      },
      clearUser : state => {
        state.user = null,
        state.token = null
      },
      setProfilePicture: (state, action) => {
        state.profilePicture = action.payload
      },
      logout: (state) => {
        state.user = null,
        state.token = null,
        state.profilePicture = null,
        state.localId = null
      }
    }   
})

export const { 
  setUser, 
  clearUser,
  setProfilePicture,
  logout,
} = authSlice.actions

export default authSlice.reducer