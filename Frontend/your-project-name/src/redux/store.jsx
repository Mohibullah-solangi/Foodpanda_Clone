import { configureStore } from "@reduxjs/toolkit";
import RestraurantSlice from './Features/Dishes/RestrauarantSlice';



export const store = configureStore({
    reducer: {
        Restraurant: RestraurantSlice,

    }
})


export default store