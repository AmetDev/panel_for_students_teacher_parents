import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PanelTeacher = () => {
	const [counter, setCounter] = useState(0)
	useEffect(() => {
		const fetchLessons = async () => {
			try {
				const { data } = await axios.get(`${__VALUE__}/page/pages`)
				console.log(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchLessons()
	}, [counter])
	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>click</button>
		</div>
	)
}

export default PanelTeacher
