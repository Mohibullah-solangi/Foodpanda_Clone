import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {

    loading: true,
    Restraurant: [],
    error: ''
}

export const fetchRestraurant= createAsyncThunk(
    'Restraurant/fetchRestraurant',
    async () => {
     let response = await fetch("http://127.0.0.1:3500/AddNewDish", {
        method: "GET",
        crossDomain: true,
        mode: "cors",
  
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      }).catch((err)=>{
        console.log(err)
      })
      const Restraurant = await response.json();
      return Restraurant
    }
  )

const RestraurantSlice = createSlice({

    name: 'Restraurant',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchRestraurant.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchRestraurant.fulfilled, (state, action) => {
                state.loading = false
                state.Restraurant = action.payload;
            })
            .addCase(fetchRestraurant.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })}
})

export default RestraurantSlice.reducer;
