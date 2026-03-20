import { Route, Routes } from 'react-router';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Detail } from './pages/Detail';
import { Page404 } from './pages/Page404';

import './App.css'
import { MainLayout } from './layouts/MainLayout';
import { CategoryLayout } from './layouts/CategoryLayout';
import { Header } from './components/Header';
import { AuthProvider } from './context/AuthProvider';

function App() {

  return (
    <AuthProvider>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:category' element={<CategoryLayout />}>
            <Route index element={<Category />} />
            <Route path=':id' element={<Detail />} />
          </Route>
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/404' element={<Page404 />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
