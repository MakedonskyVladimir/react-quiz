import React from "react";

const Game = (props) => {
    return (
        <div>
            <div>прогресс-бар</div>
            <h1>Ответь на вопросы:</h1>
            <h2>{props.questions[0].title}</h2>
            <ul>
                <li></li>
                <li>2 ответ</li>
                <li>3 ответ</li>
                <li>4 ответ</li>
            </ul>


        </div>
    )
}
export default Game