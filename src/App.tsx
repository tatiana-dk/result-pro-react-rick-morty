import { Route, Routes } from 'react-router';
import { createContext } from 'react';

import './App.css'
import { MainLayout } from './layouts/MainLayout';
import { CategoryLayout } from './layouts/CategoryLayout';
import { AuthProvider } from './context/AuthProvider';
import { PrivateRoute } from './components/PrivateRoute';
import { lazy } from 'react';

const Login = lazy(() => import('./pages/Login').then(module => ({default: module.Login})));
const Home = lazy(() => import('./pages/Home').then(module => ({default: module.Home})));
const Category = lazy(() => import('./pages/Category').then(module => ({default: module.Category})));
const Detail = lazy(() => import('./pages/Detail').then(module => ({default: module.Detail})));
const Page404 = lazy(() => import('./pages/Page404').then(module => ({default: module.Page404})));

function App() {

  return (
    <AuthProvider>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />}></Route>
            <Route path='/:category' element={<PrivateRoute><CategoryLayout /></PrivateRoute>}>
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
