import axiosInstance from "../../utils/axiosInstance";
// Fetch all team members
export const fetchTeam = async () => {
    const response = await axiosInstance.get('/teams');
    return response.data;
};

// Add a new team member
export const addTeamMember = async (memberData) => {
    const response = await axiosInstance.post('/teams', memberData);
    return response.data;
};

// Update a team member
export const updateTeamMember = async (id, memberData) => {
    const response = await axiosInstance.put(`${'/teams'}/${id}`, memberData);
    return response.data;
};

// Delete a team member
export const deleteTeamMember = async (id) => {
    const response = await axiosInstance.delete(`${'/teams'}/${id}`);
    return response.data;
};
