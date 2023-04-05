import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './assets/images/background-img.jpg'

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}
body{
    background-image:url(${BGImage});
    background-size:cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
};

*{
    box-sizing: border-box;
    font-family:'Catamaran',sans-serif;
}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	> p {
		color: #fff;
	}
	h1 {
		font-family: Fascinate Impact, Haettenschweiler, 'Arial Narrow Bold',
			sans-serif;
		background-image: linear-gradient(180deg, #fff, #87f1ff);
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	> button {
		cursor: pointer;
		padding: 5px 20px;
		border-radius: 10px;
		border: none;
		outline: none;
	}
	.score {
		color: #fff;
		font-size: 2rem;
		margin: 0;
	}
	.start {
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		font-size: 22px;
		font-weight: 600;
		color: #317731;
	}
	.next-btn {
		margin-top: 30px;
		background-color: #0ac20a;
		color: white;
		font-size: 20px;
		cursor: pointer;
		padding: 5px 20px;
	}
`
export const Container = styled.div`
	width: 500px;
	> p {
		font-size: 20px;
		font-weight: 500;
		color: #086402;
	}
	.card {
		background-color: white;
		width: 100%;
		padding: 10px;
		border-radius: 5px;
	}
	.question-card {
		padding: 10px;
		display: flex;
		justify-content: center;
	}
`

type ButtonWrapperProps = {
	correct: boolean
	userClick: boolean
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transition: all 0.3s ease;

	button {
		margin: 5px 0px;
		border-radius: 5px;
		outline: none;
		border: none;
		cursor: pointer;
		width: 100%;
		padding: 5px 0px;
		font-size: 18px;
		color: #fff;
		user-select: none;
		background: ${({ correct, userClick }) =>
			correct
				? '#16e516'
				: !correct && userClick
				? '#ff0063'
				: '#3cb3f9'};
	}
`
