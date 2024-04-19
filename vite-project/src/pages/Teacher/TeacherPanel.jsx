import React from 'react'
import HeaderInfo from '../../components/Panel/IsAdmin/HeaderInfo'
import PanelAdmin from '../../components/Panel/IsAdmin/PanelAdmin'
import style from './TeacherPanel.module.scss'
const TeacherPanel = () => {
	return (
		<div className={style.wrapperPanelTeacher}>
			<div></div>
			<div className={style.wrapperPanelInfo}>
				<HeaderInfo />
			</div>
			<div className={style.wrapperPanelAdmin}>
				<PanelAdmin />
			</div>
		</div>
	)
}

export default TeacherPanel
