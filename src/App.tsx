import React, { useState } from 'react'
import './App.css'
import QuestionCard from './components/QuestionCard'
import { fetchQuizQuestions, QuestionState } from './API'
import { Difficulty } from './API'
import { GlobalStyle, Wrapper } from './App.styles'

export type AnswerObject = {
	question: string
	answer: string
	correct: boolean
	correctAnswer: string
}

const TOTAL_QUESTIONS = 10
function App() {
	const [loading, setLoading] = useState(false)
	const [questions, setQuestions] = useState<QuestionState[]>([])
	const [number, setNumber] = useState(0)
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
	const [score, setScore] = useState(0)
	const [gameOver, setGameOver] = useState(true)

	const startTrivia = async () => {
		setLoading(true)
		setGameOver(false)

		const newQuestions = await fetchQuizQuestions(
			TOTAL_QUESTIONS,
			Difficulty.EASY,
		)

		setQuestions(newQuestions)
		setScore(0)
		setUserAnswers([])
		setNumber(0)
		setLoading(false)
	}

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			//user answer
			const answer = e.currentTarget.value

			//check answer against correct answer
			const correct = questions[number].correct_answer === answer
			if (correct) setScore((prev) => prev + 1)

			//save answer in the array for user answers
			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			}
			setUserAnswers((prev) => [...prev, answerObject])
		}
	}

	const nextQuestion = () => {
		//Move on to the next question
		const nextQuestion = number + 1
		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true)
		} else {
			setNumber(nextQuestion)
		}
	}

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<h1>React Quiz</h1>
				{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
					<button onClick={startTrivia} className='start'>
						Start
					</button>
				) : null}

				{!gameOver && <p className='score'>Score: {score}</p>}
				{loading && <p>Loading Questions ...</p>}
				{!loading && !gameOver && (
					<QuestionCard
						questionNumber={number + 1}
						totalQuestion={TOTAL_QUESTIONS}
						question={questions[number].question}
						answers={questions[number].answer}
						userAnswer={
							userAnswers ? userAnswers[number] : undefined
						}
						callback={checkAnswer}
					/>
				)}
				{!gameOver &&
				!loading &&
				userAnswers.length === number + 1 &&
				number !== TOTAL_QUESTIONS - 1 ? (
					<button className='next-btn' onClick={nextQuestion}>
						Next Question
					</button>
				) : null}
			</Wrapper>
		</>
	)
}

export default App
