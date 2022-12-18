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

const Game = () => {
  return (
    <div>
    <div>прогресс-бар</div>
    <h3>вопрос № 1</h3>
    <h4>вариант ответа 1</h4>
    <h4>вариант ответа 2</h4>
    <h4>вариант ответа 3</h4>
  </div>
  )

}

const Result = () => {
  return (
    <div>
    <h1>Результат 5 из 10...</h1>
    <button>Попробовать еще...</button>
  </div>
  )

}

const App = () => {
  const [page, setPage] = React.useState(false)

  return (
    <>
      <button onClick={() => setPage (!page)}>???</button>
      <Game />
      <Result />
    </>
  )

}

export default App