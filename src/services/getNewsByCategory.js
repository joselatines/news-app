import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_KEY = '7f600c1864644f8b9b3c5665cbc9342d';

export const newsApi = createApi({
	reducerPath: 'categories',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://newsapi.org/v2/top-headlines',
	}),
	endpoints: builder => ({
		getNews: builder.query({
			query: ({ country = 'us', category = 'general', search = '' }) =>
				`?country=${country}&category=${category}&q=${search}&apiKey=${API_KEY}`,
		}),
	}),
});

export const { useGetNewsQuery } = newsApi;
