import { useState } from 'react'
import '../src/scss/index.scss'
import PanelAdmin from './components/Panel/IsAdmin/PanelAdmin'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<PanelAdmin />
		</>
	)
}

export default App
