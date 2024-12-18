import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './slices/globalSlice';

export default configureStore({
    reducer: {
        global: globalSlice,
    }
})