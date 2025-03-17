import axiosInstance from "../../utils/axiosInstance";

// ✅ Fetch all sliders
const getAllSliders = async () => {
    const response = await axiosInstance.get("/sliders");
    return response.data;
};

// ✅ Fetch a single slider by ID
const getSingleSlider = async (id) => {
    const response = await axiosInstance.get(`${"/sliders"}/${id}`);
    return response.data;
};

// Export all service functions
const sliderService = {
    getAllSliders,
    getSingleSlider,
};

export default sliderService;
