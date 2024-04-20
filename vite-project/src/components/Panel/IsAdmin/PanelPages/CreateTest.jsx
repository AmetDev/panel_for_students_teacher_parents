import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
const CreateTest = () => {
	const [testName, setTestName] = useState('')
	const [questions, setQuestions] = useState([
		{ question: '', answers: [{ image: null, isCorrect: false }] },
	])
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

	const handleQuestionChange = (index, value) => {
		const newQuestions = [...questions]
		newQuestions[index].question = value
		setQuestions(newQuestions)
	}

	const handleImageChange = async (questionIndex, answerIndex, file) => {
		const formData = new FormData()
		formData.append('image', file)

		try {
			const token = await Cookies.get('token')

			const response = await axios.post(`${__VALUE__}/upload`, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			const imageUrl = response.data.imagelink
			console.log(response.data)
			const newQuestions = [...questions]
			newQuestions[questionIndex].answers[answerIndex].image = imageUrl
			setQuestions(newQuestions)
		} catch (error) {
			console.error('Error uploading image:', error)
		}
	}

	const toggleCorrectAnswer = (questionIndex, answerIndex) => {
		const newQuestions = [...questions]
		newQuestions[questionIndex].answers.forEach((answer, index) => {
			answer.isCorrect = index === answerIndex
		})
		setQuestions(newQuestions)
	}

	const addQuestion = () => {
		setQuestions([
			...questions,
			{ question: '', answers: [{ image: null, isCorrect: false }] },
		])
	}

	const addAnswer = questionIndex => {
		const newQuestions = [...questions]
		newQuestions[questionIndex].answers.push({ image: null, isCorrect: false })
		setQuestions(newQuestions)
	}

	const goToNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(prevIndex => prevIndex + 1)
		}
	}

	const goToPreviousQuestion = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(prevIndex => prevIndex - 1)
		}
	}

	const createTest = () => {
		const test = {
			testName: testName,
			questions: questions,
		}
		console.log(test)
	}

	return (
		<div>
			<div>
				<label htmlFor='testName'>Название теста</label>
				<input
					type='text'
					id='testName'
					value={testName}
					onChange={e => setTestName(e.target.value)}
				/>
			</div>
			<div>
				<p>Список вопросов:</p>
				<ul>
					{questions.map((q, index) => (
						<li
							key={index}
							style={{
								color: index === currentQuestionIndex ? 'red' : 'black',
							}}
						>
							Вопрос {index + 1}
						</li>
					))}
				</ul>
			</div>
			{questions.map((q, qIndex) => (
				<div
					key={qIndex}
					style={{
						display: qIndex === currentQuestionIndex ? 'block' : 'none',
					}}
				>
					<div>
						<label htmlFor={`question-${qIndex}`}>Вопрос</label>
						<input
							type='text'
							id={`question-${qIndex}`}
							value={q.question}
							onChange={e => handleQuestionChange(qIndex, e.target.value)}
						/>
					</div>
					<div>
						<span>Варианты ответа:</span>
						{q.answers.map((a, aIndex) => (
							<div key={aIndex}>
								<input
									type='file'
									onChange={e =>
										handleImageChange(qIndex, aIndex, e.target.files[0])
									}
								/>
								<button onClick={() => toggleCorrectAnswer(qIndex, aIndex)}>
									{a.isCorrect
										? 'Сбросить верный ответ'
										: 'Установить верный ответ'}
								</button>
							</div>
						))}
						<button onClick={() => addAnswer(qIndex)}>Добавить ответ</button>
					</div>
				</div>
			))}
			<button onClick={addQuestion}>Добавить вопрос</button>
			<div>
				{currentQuestionIndex > 0 && (
					<button onClick={goToPreviousQuestion}>Предыдущий</button>
				)}
				{currentQuestionIndex < questions.length - 1 && (
					<button onClick={goToNextQuestion}>Следующий</button>
				)}
			</div>
			<button onClick={createTest}>Создать</button>
		</div>
	)
}

export default CreateTest
