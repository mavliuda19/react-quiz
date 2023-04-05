import React from 'react'
import { AnswerObject } from '../App'
import { ButtonWrapper, Container } from '../App.styles'

type Props = {
	question: string
	answers: string[]
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void
	userAnswer: AnswerObject | undefined
	questionNumber: number
	totalQuestion: number
}

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumber,
	totalQuestion,
}) => {
	return (
		<Container>
			<p>
				Question: {questionNumber} / {totalQuestion}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<div className='card'>
				{answers.map((answer) => {
					return (
						<ButtonWrapper
							key={answer}
							correct={userAnswer?.correctAnswer === answer}
							userClick={userAnswer?.answer === answer}
						>
							<button
								disabled={!!userAnswer}
								value={answer}
								onClick={callback}
							>
								<span
									dangerouslySetInnerHTML={{ __html: answer }}
								/>
							</button>
						</ButtonWrapper>
					)
				})}
			</div>
		</Container>
	)
}

export default QuestionCard
