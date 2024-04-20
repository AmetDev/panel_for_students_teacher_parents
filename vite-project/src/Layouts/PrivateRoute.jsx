import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import TeacherPanel from '../pages/Teacher/TeacherPanel'
import { fetchMe } from '../redux/slices/FetchUserTeacherSlice'
const PrivateRoute = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchMe())
	}, [])

	const { me, status } = useSelector(state => state.fetchUser)
	console.log(me)
	console.log('is work')
	console.log(status)
	return status === 'success' && me.isTeacher === true ? (
		<TeacherPanel />
	) : (
		<Navigate to='/' />
	)
}

export default PrivateRoute
