import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderInfo from '../components/Panel/IsAdmin/HeaderInfo'
import PanelAdmin from '../components/Panel/IsAdmin/PanelAdmin'
import style from './TeacherPanel.module.scss'

const MainLayouts = () => {
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(fetchMe())
	// }, [])

	// const { me, status } = useSelector(state => state.fetchUser)
	// console.log(me)
	// console.log('is work')
	// console.log(status)
	return (
		<div>
			<div className={style.wrapperPanelTeacher}>
				<div className={style.wrapperPanelInfo}>
					<HeaderInfo />
				</div>
				<div className={style.wrapperPanelAdmin}>
					<PanelAdmin />
				</div>
				<div className={style.content}>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default MainLayouts
