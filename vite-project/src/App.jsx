import { Route, Routes } from 'react-router-dom'
import '../src/scss/index.scss'
import Login from './components/Login/Login'
import FullDataPage from './components/Panel/IsAdmin/PanelPages/PanelTeacher/[PanelTeacherId]/FullDataPage'
import TestDetail from './components/Panel/IsAdmin/PanelPages/TeststPage/[TestId]/Test'
import TestList from './components/Panel/IsAdmin/PanelPages/TeststPage/TestsPage'
import PanelLesson from './components/PanelStudent/components/PanelStudent/pages/[PanelStudentInnerId]/PanelLesson'
import StudentPanel from './components/PanelStudent/components/PanelStudent/studentPanel'
import MainPageStudent from './components/PanelStudent/MainPageStudent'
import MainLayouts from './Layouts/MainLayouts'
import PrivateRoute from './Layouts/PrivateRoute'
function App() {
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/student' element={<MainPageStudent />}>
					<Route path='/student/panel' element={<StudentPanel />} />
					<Route path='/student/panel/lessons/:id' element={<PanelLesson />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path='/TeacherPanel' element={<MainLayouts />} />
					<Route path='/TeacherPanel/tests' element={<TestList />} />
					<Route path='/TeacherPanel/tests/:id' element={<TestDetail />} />
				</Route>
				<Route path='/PanelTeacher/:id' element={<FullDataPage />} />
			</Routes>
		</>
	)
}

export default App
