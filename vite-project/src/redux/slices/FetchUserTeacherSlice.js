import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMe = createAsyncThunk('me/fetchMeStatus', async () => {
	const { data } = await axios.get(`http://localhost:4444/auth_teacher/me`, {
		headers: {
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIwZmQwNWVhNWY3YWRiNDMzYjg4OTYiLCJpYXQiOjE3MTM1MTE4NTAsImV4cCI6MTcxNjEwMzg1MH0.X2eYUjgR4w5OmyK-UxvyEqScPa1FXqee1q6t4YLF4lI`,
		},
	})
	return data
})

const initialState = {
	me: [],
	status: 'loading', //loading | success | error
}
const FetchMeSlice = createSlice({
	name: 'me',
	initialState,
	reducers: {
		setItems(state, action) {
			state.me = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchMe.pending, (state, action) => {
				state.status = 'loading'
				state.me = []
			})
			.addCase(fetchMe.fulfilled, (state, action) => {
				console.log('ok', state)
				state.me = action.payload
				state.status = 'success'
			})
			.addCase(fetchMe.rejected, (state, action) => {
				state.status = 'error'
				state.me = []
			})
	},
})
export const { setItems } = FetchMeSlice.actions
//export const selectorMenu = state => state.FetchMeSlice
export default FetchMeSlice.reducer
