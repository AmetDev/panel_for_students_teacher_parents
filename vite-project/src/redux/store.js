import { configureStore } from '@reduxjs/toolkit'
import FetchMeSlice from './slices/FetchUserTeacherSlice.js'
import selectedPageTeacher from './slices/SelectedPageTeacherSlice.js'
export const store = configureStore({
	reducer: {
		teacherSelectedPage: selectedPageTeacher,
		fetchUser: FetchMeSlice,
	},
})
