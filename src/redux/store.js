import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from '../redux/slices/potentialCountriesSlice' // This imports default export from potentialCountriesSlice

export default configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer
  },
});
