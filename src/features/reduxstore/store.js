import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "../reduxslice/teams/teamSlice";
import sliderReducer from '../reduxslice/sliders/sliderSlice'
import producReducer from '../reduxslice/products/productSlice'
const store = configureStore({
    reducer: {
        team: teamReducer,
        slider: sliderReducer,
        product: producReducer,
    },
});

export default store;
