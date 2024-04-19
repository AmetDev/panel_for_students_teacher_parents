import { Route, Routes } from 'react-router-dom'
import '../src/scss/index.scss'
import MainLayouts from './Layouts/MainLayouts'
import PanelContent from './components/Panel/PanelContent'
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayouts />}>
					<Route path='' element={<PanelContent />} />
					{/* <Route path='' element={<MainSearch />} /> */}
				</Route>
			</Routes>
		</>
	)
}

export default App
