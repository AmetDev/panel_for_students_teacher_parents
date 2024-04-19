import { Route, Routes } from 'react-router-dom'
import '../src/scss/index.scss'
import MainLayouts from './Layouts/MainLayouts'
import Login from './components/Login/Login'
import PanelContent from './components/Panel/PanelContent'
function App() {
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/TeacherPanel' element={<MainLayouts />}>
					<Route path='/TeacherPanel' element={<PanelContent />} />
					{/* <Route path='' element={<MainSearch />} /> */}
				</Route>
			</Routes>
		</>
	)
}

export default App
