import { configureStore } from "@reduxjs/toolkit";
import RestraurantSlice from './Features/Restraurant/RestrauarantSlice';



export const store = configureStore({
    reducer: {
        Restraurant: RestraurantSlice,

    },
    devTools: true

})


export default store