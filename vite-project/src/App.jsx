import { Route, Routes } from 'react-router-dom'
import '../src/scss/index.scss'
import Login from './components/Login/Login'
import FullDataPage from './components/Panel/IsAdmin/PanelPages/PanelTeacher/[PanelTeacherId]/FullDataPage'
import MainLayouts from './Layouts/MainLayouts'
import PrivateRoute from './Layouts/PrivateRoute'
function App() {
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route element={<PrivateRoute />}>
					<Route path='/TeacherPanel' element={<MainLayouts />} />
				</Route>
				<Route path='/PanelTeacher/:id' element={<FullDataPage />} />
			</Routes>
		</>
	)
}

export default App
