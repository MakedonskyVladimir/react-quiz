import './App.css';

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
  return (
    <>
      <h1>{questions[0].title}</h1>
    </>
  )

}

export default App