import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {

    loading: true,
    Restaurant: [],
    error: ''
}

export const fetchRestaurant= createAsyncThunk(
    'Restaurant/fetchRestaurant',
    async () => {
     let response = await fetch("http://127.0.0.1:3500/Restaurant", {
        method: "GET",
        crossDomain: true,
        mode: "cors",
        credentials: "include",
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      }).catch((err)=>{
        console.log(err)
      })
      const Restaurant = await response.json();
      return Restaurant
    }
  )

const RestaurantSlice = createSlice({

    name: 'Restaurant',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchRestaurant.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchRestaurant.fulfilled, (state, action) => {
                state.loading = false
                state.Restaurant = action.payload;
            })
            .addCase(fetchRestaurant.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })}
})

export default RestaurantSlice.reducer;
