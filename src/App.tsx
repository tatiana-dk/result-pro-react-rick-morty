import { Link, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import './App.css'

function App() {

  return (
    <>
      <Link to="/">Главная</Link>
      <Link to="/characters">Герои</Link>
      <Link to="/locations">Локации</Link>
      <Link to="/episodes">Эпизоды</Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
