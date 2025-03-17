// src/features/product/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getProductById, getProductsByCategoryId, } from './productService';

export const fetchAllProducts = createAsyncThunk('product/fetchAllProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await getAllProducts();
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchProductById = createAsyncThunk('product/fetchProductById', async (id, { rejectWithValue }) => {
    try {
        const response = await getProductById(id);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchProductsByCategoryId = createAsyncThunk('product/fetchProductsByCategoryId', async (categoryId, { rejectWithValue }) => {
    try {
        const response = await getProductsByCategoryId(categoryId);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});


// ✅ Product Slice
const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        productCategory: [],
        product: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch All Products
            .addCase(fetchAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fetch Product by ID
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload.data;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fetch Products by Category ID
            .addCase(fetchProductsByCategoryId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByCategoryId.fulfilled, (state, action) => {
                state.loading = false;
                state.productCategory = action.payload.data;
            })
            .addCase(fetchProductsByCategoryId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default productSlice.reducer;