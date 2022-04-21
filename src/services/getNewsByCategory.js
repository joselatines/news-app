import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const key = '7f600c1864644f8b9b3c5665cbc9342d';

export const newsApi = createApi({
	reducerPath: 'categories',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://newsapi.org/v2/top-headlines',
	}),
	endpoints: builder => ({
		getNews: builder.query({
			query: ({ country, category }) =>
				`?country=${country}&category=${category}&apiKey=${key}`,
		}),
	}),
});

export const { useGetNewsQuery } = newsApi;
