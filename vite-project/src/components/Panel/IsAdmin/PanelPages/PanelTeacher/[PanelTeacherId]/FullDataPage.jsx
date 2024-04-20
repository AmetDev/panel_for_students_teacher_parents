import { Interweave } from 'interweave'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setPages } from '../../../../../../redux/slices/FetchLessonSlice'
import { fetchOneLesson } from '../../../../../../redux/slices/FetchOneLessonSlice'
import style from './FullDataPage.module.scss'
const FullDataPage = () => {
	const data = useParams()
	const dispatch = useDispatch()
	const { dataOnePage } = useSelector(state => state.dataOnePageSlice)
	const navigate = useNavigate()

	const [result2, setResult2] = useState('')

	useEffect(() => {
		if (dataOnePage && dataOnePage.pageContent) {
			function updateImageSource(text) {
				return text.replace(/src=uploads/g, `src=http://localhost:4444/uploads`)
			}

			const result1 = updateImageSource(dataOnePage.pageContent)
			setResult2(result1)
		} else {
			console.warn('dataOnePage or dataOnePage.pageContent is undefined')
		}
	}, [dataOnePage])

	useEffect(() => {
		dispatch(setPages())
		dispatch(fetchOneLesson(data.id))
		dispatch(setPages())
	}, [])
	console.log(result2)

	return (
		<div className={style.fullDataPageWrapper}>
			<Interweave content={result2} />
			<button onClick={() => navigate(-1)}>Вернуться назад</button>
		</div>
	)
}

export default FullDataPage
