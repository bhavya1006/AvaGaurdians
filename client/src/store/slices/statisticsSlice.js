import { createSlice } from '@reduxjs/toolkit';

const statisticsSlice = createSlice({
    name: 'statistic',
    initialState: {
       temperature : "",
       wind_direction:"",
       wind_speed:"",
       humidity:"",
       precipitation:"",
       coordinates:""
    },
    reducers:{
        setStatistics(state,action){
            state.temperature=action.payload.temperature;
            state.wind_direction=action.payload.wind_direction;
            state.wind_speed=action.payload.wind_speed;
            state.humidity=action.payload.humidity;
            state.precipitation=action.payload.precipitation;
            state.coordinates=action.payload.coordinates;
        }
    }
})

export const {setStatistics}= statisticsSlice.actions
export default statisticsSlice.reducer