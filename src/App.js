import './App.css';
import React from 'react';

const questions = [
  {
    title: 'Реакт - это ........?', 
    variants: ['библиотека', 'фреймворк', 'приложение'], 
    correct: 0,
  }, 
  {
    title: 'Компонент - это ...?', 
    variants: ['приложение', 'часть приложения', 'сайт'], 
    correct: 1,
  }, 
  {
    title: 'JSX - это', 
    variants: ['библиотека', 'фреймворк', 'приложение'], 
    correct: 2,
  }, 
]

const Game = ({question, onCliclVariant, step}) => {
  const percentage = Math.round ((step / questions.length) * 100)
  console.log(percentage)

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
    console.log(step, index);
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