import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const key = '7f600c1864644f8b9b3c5665cbc9342d';

export const usersApi = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://newsapi.org/v2/top-headlines',
	}),
	endpoints: builder => ({
		getUsers: builder.query({
			query: category => `?category=${category}&apiKey=${key}`,
		}),
	}),
});

export const { useGetUsersQuery } = usersApi;
