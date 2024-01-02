import { configureStore } from "@reduxjs/toolkit";
import RestaurantSlice from './Features/Restraurant/RestrauarantSlice';



export const store = configureStore({
    reducer: {
        Restaurant: RestaurantSlice,

    },
    devTools: true

})


export default store