import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPages = createAsyncThunk(
	'pages/fetchPagesStatus',
	async () => {
		const { data } = await axios.get(`${__VALUE__}/page/pages`)

		return data.result
	}
)

const initialState = {
	dataPage: [],
	status: 'loading', // loading | success | error
}

const FetchLessonSlice = createSlice({
	name: 'dataPage',
	initialState,
	reducers: {
		setPages(state, action) {
			state.dataPage = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPages.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchPages.fulfilled, (state, action) => {
				// Добавление новых данных к существующему массиву
				state.dataPage = [...state.dataPage, ...action.payload]
				state.status = 'success'
			})
			.addCase(fetchPages.rejected, (state, action) => {
				state.status = 'error'
			})
	},
})

export const { setPages } = FetchLessonSlice.actions

export default FetchLessonSlice.reducer
