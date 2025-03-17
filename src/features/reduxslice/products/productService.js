// src/services/productService.js
import axiosInstance from "../../utils/axiosInstance";

// ✅ Get All Products
export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get('/products');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// ✅ Get Product by ID
export const getProductById = async (id) => {
    try {
        const response = await axiosInstance.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// ✅ Get Products by Category ID
export const getProductsByCategoryId = async (categoryId) => {
    try {
        const response = await axiosInstance.get(`/products/category/${categoryId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
