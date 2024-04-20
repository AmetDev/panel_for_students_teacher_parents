import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddStudent from '../../components/Panel/IsAdmin/PanelPages/AddStudent'
import Chart from '../../components/Panel/IsAdmin/PanelPages/Chart'
import CreateLesson from '../../components/Panel/IsAdmin/PanelPages/CreateLesson'
import CreateTest from '../../components/Panel/IsAdmin/PanelPages/CreateTest'
import OurStudents from '../../components/Panel/IsAdmin/PanelPages/OurStudents'
import PanelTeacher from '../../components/Panel/IsAdmin/PanelPages/PanelTeacher/PanelTeacher'
import RemoveStudent from '../../components/Panel/IsAdmin/PanelPages/RemoveStudent'
import { fetchMe } from '../../redux/slices/FetchUserTeacherSlice'

const PanelContent = () => {
	const { pages } = useSelector(state => state.teacherSelectedPage)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchMe())
	}, [])
	const { me, status } = useSelector(state => state.fetchUser)
	console.log(me)

	return (
		status === 'success' &&
		me.isTeacher && (
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
	)
}

export default PanelContent
