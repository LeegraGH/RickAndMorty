import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {http} from "../../services/http";
import {matchUrl} from '../../utils/matchUrl';


const fetchEpisodes = createAsyncThunk('character/fetchEpisodes',
    async (urls) => {
        // Promise.all для одновременной загрузки всех эпизодов
        return await Promise.all(urls.map(async url => {
            return await http(matchUrl(url));
        }));
    }
)

export const fetchCharacter = createAsyncThunk('character/fetchCharacter',
    async ({id}, {dispatch}) => {
        const character = await http(`/api/character/${id}`);
        const episode = await dispatch(fetchEpisodes(character.episode)).unwrap();

        return {...character, episode};
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
            state.loading = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            // character
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