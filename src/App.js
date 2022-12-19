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

const Game = ({question}) => {
  return (
    <div>
      <div className='progress'>
        <div style={{width: '50%'}} className="progress_inner">-------прогресс-бар-------</div>
      </div>
      <h3>{question.title}</h3>
      <ul>
        {
          question.variants.map((text) => (
            <li key={text}>{text}</li>
          ))}
      </ul>
  </div>
  )

}

const Result = () => {
  return (
    <div className='result'>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" width="200px"/>      <h1>Результат 5 из 10...</h1>
      <button>Попробовать еще...</button>
  </div>
  )

}

const App = () => {
  const [step, setStep] = React.useState(0)
  const question = questions[step]

  return (
    <div className='App'>
      <Game question={question}/>
      <Result />
    </div>
  )

}

export default App