import React from 'react'
import { useSelector } from 'react-redux'
import AddStudent from '../../components/Panel/IsAdmin/PanelPages/AddStudent'
import Chart from '../../components/Panel/IsAdmin/PanelPages/Chart'
import CreateLesson from '../../components/Panel/IsAdmin/PanelPages/CreateLesson'
import CreateTest from '../../components/Panel/IsAdmin/PanelPages/CreateTest'
import OurStudents from '../../components/Panel/IsAdmin/PanelPages/OurStudents'
import PanelTeacher from '../../components/Panel/IsAdmin/PanelPages/PanelTeacher'
import RemoveStudent from '../../components/Panel/IsAdmin/PanelPages/RemoveStudent'

const PanelContent = () => {
	const { pages } = useSelector(state => state.teacherSelectedPage)

	return (
		<div>
			{pages.label === 'Панель учителя' && <PanelTeacher />}
			{pages.label === 'статистика' && <Chart />}
			{pages.label === 'создание теста' && <CreateTest />}
			{pages.label === 'создание урока' && <CreateLesson />}
			{pages.label === 'Ваши ученики' && <OurStudents />}
			{pages.label === 'Добавить ученика' && <AddStudent />}
			{pages.label === 'Убрать ученика' && <RemoveStudent />}
		</div>
	)
}

export default PanelContent
