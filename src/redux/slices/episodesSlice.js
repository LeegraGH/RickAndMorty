import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {http} from '../../services/http';
import {paramsFilter} from "../../utils/paramsFilter";

export const fetchEpisodes = createAsyncThunk('episodes/fetchEpisodes',
    async (page = 1, {getState}) => {
        const params = paramsFilter(page, getState, 'episodes')

        return await http(`/api/episode/?${params}`);
    }
)

const episodesSlice = createSlice({
    name: 'episodes',
    initialState: {
        data: null,
        loading: 'idle',
        filters: {
            name: '',
            episode: ''
        }
    },
    reducers: {
        updateEpisodeName: (state, action) => {
            state.filters.name = action.payload
        },
        updateEpisodeCode: (state, action) => {
            state.filters.episode = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEpisodes.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchEpisodes.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = 'success';
            })
            .addCase(fetchEpisodes.rejected, (state) => {
                state.loading = 'error';
            })
    }
})

const {reducer, actions} = episodesSlice;

export const {
    updateEpisodeName,
    updateEpisodeCode
} = actions;
export default reducer;