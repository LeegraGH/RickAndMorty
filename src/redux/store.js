import {configureStore} from '@reduxjs/toolkit';
import charactersReducer from './slices/charactersSlice';
import characterReducer from './slices/characterSlice';
import episodesReducer from './slices/episodesSlice';

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        character: characterReducer,
        episodes: episodesReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;