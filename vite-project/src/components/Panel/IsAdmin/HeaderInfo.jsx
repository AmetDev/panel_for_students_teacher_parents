import axios from 'axios'
import React, { useEffect, useState } from 'react'
import lesson from '../../../assets/lesson.svg'
import test from '../../../assets/test.svg'
import User from '../../../assets/user.png'
import style from './HeaderInfo.module.scss'
const HeaderInfo = () => {
	const [me, setMe] = useState(null)
	useEffect(() => {
		const fetchMe = async () => {
			try {
				const response = await axios.get(
					`http://localhost:4444/auth_teacher/me`,
					{
						headers: {
							Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIwZmQwNWVhNWY3YWRiNDMzYjg4OTYiLCJpYXQiOjE3MTM1MTE4NTAsImV4cCI6MTcxNjEwMzg1MH0.X2eYUjgR4w5OmyK-UxvyEqScPa1FXqee1q6t4YLF4lI`,
						},
					}
				)
				console.log(response)
				setMe(response.data)
			} catch (error) {
				setMe(null)
			}
		}
		fetchMe()
	}, [])

	return (
		me && (
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
