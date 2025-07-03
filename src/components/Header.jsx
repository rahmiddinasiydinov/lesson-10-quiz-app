import quizLogo from '../assets/quiz-logo.png'
export default function Header(){
    return <header>
    <img src={quizLogo} alt="Quiz logo: unfilled notepad with pens near it" />
    <h1>ReactQuiz</h1>
    </header>
}