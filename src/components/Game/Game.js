import React from "react"
import questions from "../../App"
const Game = ({question, onCliclVariant, step}) => {
    const percentage = Math.round ((step / questions.length) * 100)
  
    return (
      <div>
        <div className='progress'>
          <div style={{width: `${percentage}%`}} className="progressinner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((variant, index) => (
              <li onClick={() => onCliclVariant(index)} key={index}>{variant}</li>
            ))}
        </ul>
      </div>
    )
  }
  export default Game 