import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import style from './AddParentv2.module.scss'
const AddParentV2 = () => {
	const [meUUID, setMeUUID] = useState(null)
	useEffect(() => {
		const fetchMe = async () => {
			try {
				const token = await Cookies.get('token')
				const data2 = await axios.get(`${__VALUE__}/auth_parent/me`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				setMeUUID(data2.data._id)
			} catch (error) {
				alert('Не удалось получить данные')
			}
		}
		fetchMe()
	}, [])
	return (
		<div className={style.wrapperAddStudent}>
			<p>
				Предоставьте ребенку данный UUID-код и предложите добавить его в свой
				раздел "добавить родителя". После того, как он добавит данный код, ему
				будут доступны ваш контакт.
			</p>
			{meUUID !== null ? (
				<div className={style.uuidWrapper}>{meUUID}</div>
			) : (
				<div>не удалось получить ваш UUID</div>
			)}
		</div>
	)
}

export default AddParentV2
