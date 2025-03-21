import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    isAuthenticated: false,
    user: null,
    isLoadin: false,
}




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: (state, action) => {
    }
})



export const {setUser} = authSlice.actions;
export default authSlice.reducer;
