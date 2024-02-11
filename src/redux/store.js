import {configureStore} from '@reduxjs/toolkit';
import characterReducer from './slices/charactersSlice';

const store = configureStore({
    reducer: {
        characters: characterReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;