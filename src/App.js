import './App.css';
import React from 'react';
import Game from './components/Game/Game';
import Result from './components/Result/Result';

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

const App = () => {
  const [page, setPage] = React.useState(true)
  const [step, setStep] = React.useState(0)

  return (
    <>
      <button onClick={() => setPage (!page)}>???</button>
      {page && <Game questions = {questions} step={step}/>}
      {!page && <Result />}
    </>
  )

}

export default App