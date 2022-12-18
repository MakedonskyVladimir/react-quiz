import React from "react";

const Game = (props) => {
    return (
        <div>
            <div>прогресс-бар</div>
            <h1>Ответь на вопросы:</h1>
            <h2>вопрос № {props.step}</h2>
            <h2>{props.questions[props.step].title}</h2>
            <ul>
                <li>{props.questions[0].variants[0]}</li>
                <li>{props.questions[0].variants[1]}</li>
                <li>{props.questions[0].variants[2]}</li>
            </ul>


        </div>
    )
}
export default Game