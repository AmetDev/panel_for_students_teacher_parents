import React, { useState } from 'react'
import style from './PanelAdmin.module.scss'

import { useDispatch } from 'react-redux'
import day from '../../../assets/day.svg'
import addChild from '../../../assets/panelAdmin/addChild.svg'
import chart from '../../../assets/panelAdmin/chart.svg'
import childs from '../../../assets/panelAdmin/childs.svg'
import doc from '../../../assets/panelAdmin/doc.svg'
import home from '../../../assets/panelAdmin/home.svg'
import question from '../../../assets/panelAdmin/question.svg'
import removeChild from '../../../assets/panelAdmin/removeChild.svg'
import { setPage } from '../../../redux/slices/SelectedPageTeacherSlice'

const PanelAdmin = () => {
	const dispatch = useDispatch()
	const initialState = [
		{ icon: home, label: 'Панель учителя', state: false },
		{ icon: chart, label: 'статистика', state: false },
		{ icon: question, label: 'создание теста', state: false },
		{ icon: doc, label: 'создание урока', state: false },
		{ icon: childs, label: 'Ваши ученики', state: false },
		{ icon: addChild, label: 'Добавить ученика', state: false },
		{ icon: removeChild, label: 'Убрать ученика', state: false },
	]

	const [buttons, setButtons] = useState(initialState)

	const toggleButtonState = index => {
		//		setButtons(newButtons)
		dispatch(setPage(initialState[index]))
	}

	return (
		<div className={style.wrapperPanel}>
			<div className={style.wrapperIcon}>
				<img src={day} alt='' />
				<span>ДАЙ ПЯТЬ!</span>
			</div>
			{buttons.map((button, index) => (
				<button
					key={index}
					onClick={() => toggleButtonState(index)}
					className={style.btnPanel}
				>
					<img src={button.icon} alt='' />
					<span>{button.label}</span>
				</button>
			))}
		</div>
	)
}

export default PanelAdmin
