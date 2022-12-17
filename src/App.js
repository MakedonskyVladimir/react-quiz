import './App.css';
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
  return (
    <>
      <Result />
    </>
  )

}

export default App