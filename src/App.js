import './App.css';
import React from 'react';

const questions = [
  {
    title: 'black', 
    variants: ['черный', 'коричневый', 'розовый'], 
    correct: 0,
  },
  {
    title: 'pink', 
    variants: ['коричневый', 'черный', 'розовый'], 
    correct: 2,
  },
  {
    title: 'yellow', 
    variants: ['розовый', 'желтый', 'зеленый'], 
    correct: 1,
  },
  {
    title: 'white', 
    variants: ['желтый', 'зеленый', 'белый'], 
    correct: 2,
  },
  {
    title: 'green', 
    variants: ['зеленый', 'коричневый', 'красный'], 
    correct: 0,
  },
  {
    title: 'blue', 
    variants: ['черный', 'синий', 'желтый'], 
    correct: 1,
  },
  {
    title: "давай", 
    variants: ['come in', "let's", 'it is'], 
    correct: 1,
  },
  {
    title: 'school', 
    variants: ['портфель', 'ручка', 'школа'], 
    correct: 2,
  },
  {
    title: 'bag', 
    variants: ['ручка', 'сумка', 'линейка'], 
    correct: 1,
  },
  {
    title: 'pen', 
    variants: ['линейка', 'карандаш', 'ручка'], 
    correct: 2,
  },
  {
    title: 'ruler', 
    variants: ['стерка', 'линейка', 'карандаш'], 
    correct: 1,
  },
  {
    title: 'пенал', 
    variants: ['pen', 'pencil', 'pencil box'], 
    correct: 2,
  },
  {
    title: '11', 
    variants: ['eleven', 'thirteen', 'twelwe'], 
    correct: 0,
  },
  {
    title: 'listen', 
    variants: ['слушай', 'смотри', 'сиди'], 
    correct: 0,
  },
  {
    title: 'Math', 
    variants: ['география', 'математика', 'история'], 
    correct: 1,
  },
  {
    title: 'история', 
    variants: ['English', 'Geography', 'History'], 
    correct: 2,
  },
  {
    title: 'Музыка', 
    variants: ['Geography', 'Music', 'Maths'], 
    correct: 1,
  },
  {
    title: 'look', 
    variants: ['читай', 'смотри', 'уйди'], 
    correct: 1,
  },
  {
    title: 'треугольник', 
    variants: ['circle', 'square', 'triangle'], 
    correct: 2,
  },
  {
    title: 'her', 
    variants: ['его', 'ее', 'нам'], 
    correct: 1,
  },
]

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

const Result = ({correct}) => {
  return (
    <div className='result'>
      {/* <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>       */}
      <h2>Правильно: {correct} из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать еще...</button>
      </a>
  </div>
  )
}

const App = () => {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = questions[step]

  const onCliclVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className='App'>
      {
        step != questions.length ? (
          <Game step={step} question={question} onCliclVariant={onCliclVariant}/>
          ) : (
          <Result correct={correct}/>
          )}
    </div>
  )

}

export default App