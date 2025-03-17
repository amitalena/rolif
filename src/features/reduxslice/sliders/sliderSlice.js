import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sliderService from "./sliderService";

// ✅ Fetch all sliders
export const fetchSliders = createAsyncThunk(
    "sliders/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            return await sliderService.getAllSliders();
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// ✅ Fetch a single slider by ID
export const fetchSingleSlider = createAsyncThunk(
    "sliders/fetchOne",
    async (id, { rejectWithValue }) => {
        try {
            return await sliderService.getSingleSlider(id);
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


const sliderSlice = createSlice({
    name: "sliders",
    initialState: {
        sliders: [],
        singleSlider: null,
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            // ✅ Fetch all sliders
            .addCase(fetchSliders.pending, (state) => { state.loading = true; })
            .addCase(fetchSliders.fulfilled, (state, action) => {
                state.loading = false;
                state.sliders = action.payload;
            })
            .addCase(fetchSliders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ✅ Fetch single slider
            .addCase(fetchSingleSlider.pending, (state) => { state.loading = true; })
            .addCase(fetchSingleSlider.fulfilled, (state, action) => {
                state.loading = false;
                state.singleSlider = action.payload;
            })
            .addCase(fetchSingleSlider.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default sliderSlice.reducer;
