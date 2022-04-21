import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { newsApi } from '../services/getNewsByCategory';

export const store = configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(newsApi.middleware),
});

setupListeners(store.dispatch);
