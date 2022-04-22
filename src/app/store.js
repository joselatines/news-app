import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import configSlice from '../features/configSlice';
import { newsApi } from '../services/getNewsByCategory';

export const store = configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
		config: configSlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(newsApi.middleware),
});

setupListeners(store.dispatch);
