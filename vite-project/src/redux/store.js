import { configureStore } from '@reduxjs/toolkit'
import undoable from 'redux-undo'
import FetchMeSlice from './slices/FetchUserTeacherSlice.js'
import selectedPageTeacher from './slices/SelectedPageTeacherSlice.js'
import counterSlice from './slices/UndoRendoSlice.js'
export const store = configureStore({
	reducer: {
		teacherSelectedPage: selectedPageTeacher,
		fetchUser: FetchMeSlice,
		counter: undoable(counterSlice),
	},
})
