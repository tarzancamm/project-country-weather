import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: { 
    value: [
        { 
            name: { 
                common: "America"
            }, 
        },
    ], 
},
  reducers: {
    setPotentialCountries: (state, action) => {
      state.value = action.payload;
    },
    deletePotentialCountries: (state) => {
      state.value = null;
    },
  },
});

export const { setPotentialCountries, deletePotentialCountries } = potentialCountriesSlice.actions; // createSlice will take reducers and turn them into 'actions'
export const selectPotentials = (state) => state.potentialCountries.value; // Defines how to read the state of potentialCountries
export default potentialCountriesSlice.reducer; // The reducer from potentialCountriesSlice is created by createSlice from Redux Toolkit
