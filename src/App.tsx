import { Link, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
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
        <Route path='/characters'>
          <Route index element={<Characters />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
