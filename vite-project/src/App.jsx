import { Route, Routes } from 'react-router-dom'
import '../src/scss/index.scss'
import Login from './components/Login/Login'
import FullDataPage from './components/Panel/IsAdmin/PanelPages/PanelTeacher/[PanelTeacherId]/FullDataPage'
import PrivateRoute from './Layouts/PrivateRoute'
import TeacherPanel from './pages/Teacher/TeacherPanel'
function App() {
	const { pages } = useSelector(state => state.teacherSelectedPage)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchMe())
	}, [])
	const { me, status } = useSelector(state => state.fetchUser)
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route element={<PrivateRoute />} />
				<Route path='/TeacherPanel' element={<TeacherPanel />} />
				<Route
					path='/TeacherPanel/PanelTeacher/:id'
					element={<FullDataPage />}
				/>
				{/* <Route path='/TeacherPanel' element={<MainLayouts />}>
					<Route path='/TeacherPanel' element={<PanelContent />} />
					<Route path='PanelTeacher/:id' element={<FullDataPage />} />
				</Route> */}
			</Routes>
		</>
	)
}

export default App
