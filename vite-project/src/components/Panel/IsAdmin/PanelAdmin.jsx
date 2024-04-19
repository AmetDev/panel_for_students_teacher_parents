import React from 'react'
import day from '../../../assets/day.svg'
import addChild from '../../../assets/panelAdmin/addChild.svg'
import chart from '../../../assets/panelAdmin/chart.svg'
import childs from '../../../assets/panelAdmin/childs.svg'
import doc from '../../../assets/panelAdmin/doc.svg'
import home from '../../../assets/panelAdmin/home.svg'
import question from '../../../assets/panelAdmin/question.svg'
import removeChild from '../../../assets/panelAdmin/removeChild.svg'
import style from './PanelAdmin.module.scss'
const PanelAdmin = () => {
	const switcherPages = () => {}
	return (
		<div className={style.wrapperPanel}>
			<div className={style.wrapperIcon}>
				<img src={day} alt='' />
				<span>ДАЙ ПЯТЬ!</span>
			</div>
			<button className={style.btnPanel}>
				<img src={home} alt='' srcset='' />
				<span>Панель учителя</span>
			</button>
			<button className={style.btnPanel}>
				<img src={chart} alt='' srcset='' />
				<span>статистика</span>
			</button>
			<button className={style.btnPanel}>
				<img src={question} alt='' srcset='' />
				<span>создание теста</span>
			</button>
			<button className={style.btnPanel}>
				<img src={doc} alt='' srcset='' />
				<span>создание урока</span>
			</button>
			<button className={style.btnPanel}>
				<img src={childs} alt='' srcset='' />
				<span>Ваши ученики</span>
			</button>
			<button className={style.btnPanel}>
				<img src={addChild} alt='' srcset='' />
				<span>Добавить ученика</span>
			</button>
			<button className={style.btnPanel}>
				<img src={removeChild} alt='' srcset='' />
				<span>Убрать ученика</span>
			</button>
		</div>
	)
}

export default PanelAdmin
