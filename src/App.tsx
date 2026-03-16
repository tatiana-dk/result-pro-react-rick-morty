import { Link, Route, Routes } from 'react-router';

import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Detail } from './pages/Detail';

import './App.css'
import { CategoryLayout } from './layouts/CategoryLayout';

function App() {

  return (
    <>
      <Link to="/">Главная</Link>
      <Link to="/characters">Персонажи</Link>
      <Link to="/locations">Локации</Link>
      <Link to="/episodes">Эпизоды</Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:category' element={<CategoryLayout />}>
          <Route index element={<Category />} />
          <Route path=':id' element={<Detail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
