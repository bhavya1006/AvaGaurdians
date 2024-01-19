import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'User',
    initialState: {
        username :'',
        contact : ''
    },
    reducers:{
        setUser(state,action){
            if(action.payload.username){
                state.username = action.payload.username
            }
            if(action.payload.contact){
                state.contact = action.payload.contact
            }
        }
    }
})

export const {setUser}= userSlice.actions
export default userSlice.reducer