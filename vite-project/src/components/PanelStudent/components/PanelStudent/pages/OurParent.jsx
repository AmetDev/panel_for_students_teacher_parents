import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

const OurParent = () => {
	const [hasParentUuid, setHasParentUuid] = useState(false)
	const [parentData, setParentData] = useState(null)

	useEffect(() => {
		const fetchMeOne = async () => {
			try {
				const token = await Cookies.get('token')
				const { data } = await axios.get(`${__VALUE__}/auth_student/me`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				console.log(data)

				if (data && data.Parent_uuid) {
					setHasParentUuid(true)
					await fetchParentData(data.Parent_uuid, token)
				} else {
					setHasParentUuid(false)
				}
			} catch (error) {
				console.log(error)
			}
		}

		const fetchParentData = async (parentUuid, token) => {
			try {
				const { data } = await axios.get(
					`${__VALUE__}/auth_parent/parentuser`,
					{
						params: {
							Parent_uuid: parentUuid,
						},
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				setParentData(data)
			} catch (error) {
				console.log(error)
			}
		}

		fetchMeOne()
	}, [])

	return (
		<div>
			{hasParentUuid ? (
				<div>
					<span>Parent_uuid существует</span>
					{parentData && (
						<div>
							<span>Имя родителя: {parentData.fullName}</span>
							<span>Email родителя: {parentData.email}</span>
						</div>
					)}
				</div>
			) : (
				<span>Parent_uuid не существует</span>
			)}
		</div>
	)
}

export default OurParent
