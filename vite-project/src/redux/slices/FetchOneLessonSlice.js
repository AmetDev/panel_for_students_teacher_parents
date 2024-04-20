import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchOneLesson = createAsyncThunk(
	'getonepage/fetchOnePageStatus',
	async counter => {
		const { data } = await axios.get(`${__VALUE__}/page/getonepage`, {
			params: {
				url: counter,
			},
		})
		return data.result
	}
)

const initialState = {
	dataOnePage: {},
	status: 'loading', // loading | success | error
}

const FetchOneLessonSlice = createSlice({
	name: 'dataOnePage',
	initialState,
	reducers: {
		setOnePage(state, action) {
			state.dataOnePage = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchOneLesson.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchOneLesson.fulfilled, (state, action) => {
				// Добавление новых данных к существующему массиву
				state.dataOnePage = action.payload
				state.status = 'success'
			})
			.addCase(fetchOneLesson.rejected, (state, action) => {
				state.status = 'error'
			})
	},
})

export const { setOnePage } = FetchOneLessonSlice.actions

export default FetchOneLessonSlice.reducer
