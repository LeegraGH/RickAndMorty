import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {http} from '../../services/http';

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters',
    async (page = 1, {getState}) => {
        const {characters: {filters}} = getState();

        const existingFilters = Object.entries(filters).filter(([key, value]) => value !== "")

        const params = new URLSearchParams([['page', page], ...existingFilters]).toString();

        return await http(`/api/character/?${params}`);
    }
)

const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        data: null,
        loading: 'idle',
        filters: {
            name: '',
            status: '',
            gender: ''
        }
    },
    reducers: {
        updateCharacter: (state, action) => {
            state.filters.name = action.payload
        },
        updateCharacterGender: (state, action) => {
            state.filters.gender = action.payload
        },
        updateCharacterStatus: (state, action) => {
            state.filters.status = action.payload
        },
        clearFilters: (state, action) => {
            state.filters = {
                ...state.filters,
                gender: '',
                status: ''
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = 'success';
            })
            .addCase(fetchCharacters.rejected, (state) => {
                state.loading = 'error';
            })
    }
})

const {reducer, actions} = charactersSlice;

export const {
    updateCharacter,
    updateCharacterGender,
    updateCharacterStatus,
    clearFilters
} = actions;
export default reducer;