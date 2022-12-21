import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice"; // This imports default export from potentialCountriesSlice
import displayCountryReducer from "../redux/slices/displayCountrySlice";

// State is combined into a SINGLE object holding the state from both slices
export default configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayCountryReducer,
  },
});
