import { configureStore } from '@reduxjs/toolkit'
import undoable from 'redux-undo'
import FetchLessonSlice from './slices/FetchLessonSlice'
import FetchOneLessonSlice from './slices/FetchOneLessonSlice'
import FetchMeSlice from './slices/FetchUserTeacherSlice.js'
import selectedPageTeacher from './slices/SelectedPageTeacherSlice.js'
import counterSlice from './slices/UndoRendoSlice.js'
export const store = configureStore({
	reducer: {
		teacherSelectedPage: selectedPageTeacher,
		fetchUser: FetchMeSlice,
		counter: undoable(counterSlice),
		dataPages: FetchLessonSlice,
		dataOnePageSlice: FetchOneLessonSlice,
	},
})
