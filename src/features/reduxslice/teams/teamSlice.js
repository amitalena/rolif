import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addTeamMember, deleteTeamMember, fetchTeam, updateTeamMember } from "./teamService";

// Async thunks
export const getTeam = createAsyncThunk("team/getTeam", async (_, { rejectWithValue }) => {
    try {
        return await fetchTeam();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const createTeamMember = createAsyncThunk("team/createTeamMember", async (memberData, { rejectWithValue }) => {
    try {
        return await addTeamMember(memberData);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const editTeamMember = createAsyncThunk("team/editTeamMember", async ({ id, memberData }, { rejectWithValue }) => {
    try {
        return await updateTeamMember(id, memberData);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const removeTeamMember = createAsyncThunk("team/removeTeamMember", async (id, { rejectWithValue }) => {
    try {
        return await deleteTeamMember(id);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Redux slice
const teamSlice = createSlice({
    name: "team",
    initialState: {
        teamList: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTeam.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTeam.fulfilled, (state, action) => {
                state.loading = false;
                state.teamList = action.payload.data;
            })
            .addCase(getTeam.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createTeamMember.fulfilled, (state, action) => {
                state.teamList.push(action.payload.data);
            })
            .addCase(editTeamMember.fulfilled, (state, action) => {
                const index = state.teamList.findIndex((team) => team._id === action.payload.data._id);
                if (index !== -1) state.teamList[index] = action.payload.data;
            })
            .addCase(removeTeamMember.fulfilled, (state, action) => {
                state.teamList = state.teamList.filter((team) => team._id !== action.meta.arg);
            });
    },
});

export default teamSlice.reducer;
