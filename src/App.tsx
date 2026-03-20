import { Route, Routes } from 'react-router';

import { Page404 } from './pages/Page404';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Detail } from './pages/Detail';

import './App.css'
import { CategoryLayout } from './layouts/CategoryLayout';
import { Header } from './components/Header';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:category' element={<CategoryLayout />}>
          <Route index element={<Category />} />
          <Route path=':id' element={<Detail />} />
        </Route>
        <Route path='/404' element={<Page404 />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </>
  )
}

export default App
