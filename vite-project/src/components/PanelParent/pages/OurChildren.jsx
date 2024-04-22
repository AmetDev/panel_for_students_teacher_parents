import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import user from '../../../assets/user.png'
import style from './OurStudents.module.scss'
const OurChildren = () => {
	const [students, setStudents] = useState([])
	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const token = await Cookies.get('token')
				const data2 = await axios.get(`${__VALUE__}/auth_parent/me`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})

				const { data } = await axios.get(
					`${__VALUE__}/auth_student/studentforparent`,
					{
						params: {
							Parent_uuid: data2.data._id,
						},
					}
				)
				console.log(data)
				setStudents(...data)
			} catch (error) {
				console.log(error)
				setStudents([])
			}
		}
		fetchStudents()
	}, [])

	return (
		<div className={style.wrapperOurStudents}>
			{students.length == 0 && <div>вы не добавили ребенка</div>}
			{students.length !== 0 && (
				<div className={style.wrapperElementStudent}>
					{students.map(element => {
						return (
							<div key={element._id}>
								<img src={user} width={'50px'} height={'50px'} alt='' />
								<div>
									<div>
										<span>{element.fullName}</span>
									</div>
									<div>
										<span>{element.email}</span>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default OurChildren
