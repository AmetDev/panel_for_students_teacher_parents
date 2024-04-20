import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lesson from '../../../assets/lesson.svg'
import test from '../../../assets/test.svg'
import User from '../../../assets/user.png'
import { fetchMe } from '../../../redux/slices/FetchUserTeacherSlice'
import style from './HeaderInfo.module.scss'

const HeaderInfo = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchMe())
	}, [])
	const { me, status } = useSelector(state => state.fetchUser)
	console.log(me)
	return (
		status === 'success' &&
		me.isTeacher && (
			<div className={style.HeaderInfo}>
				<div className={style.userWrapper}>
					<div>
						<img src={User} alt='user' />
					</div>
					<div>
						<span>{me.fullName}</span>
						<span>{me.email}</span>
					</div>
				</div>
				<div className={style.WrapperSwitcher}>
					<div>
						<img src={lesson} alt='' />
						<button>Уроки</button>
					</div>
					<div>
						<img src={test} alt='' />
						<button>Тесты</button>
					</div>
				</div>
			</div>
		)
	)
}

export default HeaderInfo
