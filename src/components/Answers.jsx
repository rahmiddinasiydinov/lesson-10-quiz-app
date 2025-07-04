import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return <ul id="answers">
        {shuffledAnswers.current.map(answer => {
            const isSelected = selectedAnswer === answer;
            let classes = '';
            if (answerState === 'answered' && isSelected) {
                classes = 'selected'
            }

            if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                classes = answerState;
            }
            return <li key={answer} className="answer">
                <button disabled={answerState !== ''} onClick={() => onSelect(answer)} className={classes}>{answer}</button>
            </li>
        })}
    </ul>
}