import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	category: 'general',
	country: 'us',
	search: '',
};

export const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		// state = initialState
		setCategory: (state, action) => {
			state.category = action.payload;
		},
		setCountry: (state, action) => {
			state.country = action.payload;
		},
		setSearch: (state, action) => {
			state.search = action.payload;
		},
	},
});

export const { setCategory, setCountry, setSearch } = configSlice.actions;

export default configSlice.reducer;
