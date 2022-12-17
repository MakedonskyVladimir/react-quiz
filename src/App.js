import './App.css';
import React from 'react';
import Game from './components/Game/Game';
import Result from './components/Result/Result';

const questions = [
  {
    title: 'Реакт - это ...?', 
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

  return (
    <>
      <button onClick={() => setPage (!page)}>???</button>
      {page && <Game />}
      {!page && <Result />}
    </>
  )

}

export default App