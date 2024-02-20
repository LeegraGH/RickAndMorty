import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {http} from "../../services/http";


export const fetchCharacter = createAsyncThunk('character/fetchCharacter',
    async (id) => {
        return await http(`https://rickandmortyapi.com/api/character/${id}`);
    }
)


const characterSlice = createSlice({
    name: 'character',
    initialState: {
        data: null,
        loading: 'idle'
    },
    reducers: {
        clearCharacter: (state) => {
            state.data = null;
            state.loading = 'idle'
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacter.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchCharacter.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = 'success';
            })
            .addCase(fetchCharacter.rejected, (state) => {
                state.loading = 'error';
            })
    }
})

const {reducer, actions} = characterSlice;

export const {clearCharacter} = actions;
export default reducer;