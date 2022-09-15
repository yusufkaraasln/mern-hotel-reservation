import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  city: undefined,
  date:[],
  options:{
    adult: undefined,
    child: undefined,
    room: undefined,
  }
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {   
     newSearch : (state, action) => {
        state.city = action.payload.city;
        state.date = action.payload.date;
        state.options = action.payload.options;
        

     }
  },
})

export const { newSearch } = searchSlice.actions

export default searchSlice.reducer