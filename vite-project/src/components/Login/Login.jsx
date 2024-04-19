import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { fetchUser } from '../../redux/slices/CurrentlyUserSlice'
import style from './Login.module.scss'
const Login = () => {
	const [teacherState, setTeacherState] = useState(false)
	const [parentState, setParentState] = useState(false)
	const [studentState, setStudentState] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const handlerTeacher = () => {
		setTeacherState(!teacherState)
	}
	const handlerParent = () => {
		setParentState(!parentState)
	}
	const handlerStudent = () => {
		setStudentState(!studentState)
	}
	const { me } = useSelector(state => state.fetchUser)
	console.log('dta', me)
	const handlerSubmit = e => {
		e.preventDefault()
		if (!email || !password) {
			alert('Заполните все поля!')
			return
		}
		if (!teacherState && !parentState && !studentState) {
			alert('Выберите роль!')
			return
		}
		const user = {
			email,
			password,
			teacherState,
			parentState,
			studentState,
		}

		dispatch(fetchUser(user))
	}

	return (
		<div className={style.wrapperRoot}>
			<form className={style.wrapperForm} onSubmit={handlerSubmit}>
				<h2>Вход</h2>
				<label htmlFor=''>Электронная почта</label>
				<input type='text' onChange={e => setEmail(e.target.value)} />
				<label htmlFor=''>Пароль</label>
				<input type='password' onChange={e => setPassword(e.target.value)} />
				<h3>Войти как:</h3>
				<div className={style.wrapperInputs}>
					<div>
						<input
							type='radio'
							name='teacher'
							id='teacher'
							onChange={handlerTeacher}
						/>
						<label htmlFor=''>Учитель</label>
					</div>
					<div>
						<input
							type='radio'
							name='parent'
							id='parent'
							onChange={handlerParent}
						/>
						<label htmlFor=''>Родитель</label>
					</div>
					<div>
						<input
							type='radio'
							name='Student'
							id='Student'
							onChange={handlerStudent}
						/>
						<label htmlFor=''>Ученик</label>
					</div>
				</div>
				<button type='submit'>Войти</button>
				{me.typeUser == 'teacher' && <Navigate to='/TeacherPanel' />}
			</form>
		</div>
	)
}

export default Login
