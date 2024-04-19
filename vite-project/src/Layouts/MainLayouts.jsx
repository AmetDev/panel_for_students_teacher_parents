import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderInfo from '../components/Panel/IsAdmin/HeaderInfo'
import PanelAdmin from '../components/Panel/IsAdmin/PanelAdmin'
import style from './TeacherPanel.module.scss'
const MainLayouts = () => {
	return (
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
	)
}
export default MainLayouts
