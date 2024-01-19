import create from 'zustand';

export const useProbability = create((set) => ({
    probability: "",
    setProbability: (chance) => set({ probability: chance })
}))

export const useStatistics = create((set) => ({
    temperature: "",
    wind_direction: "",
    wind_speed: "",
    humidity: "",
    precipitation: "",
    coordinates: "",

    setStatistics: (statistic) => set({
        temperature: statistic.temperature,
        wind_direction: statistic.wind_direction,
        wind_speed: statistic.wind_speed,
        humidity: statistic.humidity,
        precipitation: statistic.precipitation,
        coordinates: statistic.coordinates
    })
}))

export const useToast = create((set)=>({
    message:"",
    type : "",
    setToast:(toast)=>{set({
        message:toast.message,
        type:toast.type
    })},
    clearToast :()=>{set({
       message:"",
       type: ""
    })}
}))

export const useTutorial = create((set)=>({
    path:"",
    setPath:(path_tutorial)=>{set({
        path:path_tutorial
    })}
}))

export const useUser = create((set)=>({
    username:"",
    contact:"",
    setUser :(user)=>{set({
        username:user.username,
        contact:user.contact
    })}
}))
