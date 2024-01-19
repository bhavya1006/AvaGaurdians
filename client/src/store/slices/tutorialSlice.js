import { createSlice } from '@reduxjs/toolkit';

const tutorialSlice = createSlice({
    name: 'tutorial',
    initialState: {
       path:''
    },
    reducers:{
        setTutorial(state,action){
            if(action.payload.path){
                state.path = action.payload.path
            }
        }
    }
})

export const {setTutorial}= tutorialSlice.actions
export default tutorialSlice.reducer