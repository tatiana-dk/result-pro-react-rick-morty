import { Route, Routes, BrowserRouter } from 'react-router';
import { lazy } from 'react';

import { MainLayout } from '@/app/ui/MainLayout';
import { PrivateRoute } from '@/app/providers/Router/PrivateRoute';

const Login = lazy(() => import('@pages/Login').then(module => ({default: module.Login})));
const Home = lazy(() => import('@pages/Home').then(module => ({default: module.Home})));
const Category = lazy(() => import('@pages/Category').then(module => ({default: module.Category})));
const Detail = lazy(() => import('@pages/Detail').then(module => ({default: module.Detail})));
const Page404 = lazy(() => import('@pages/Page404').then(module => ({default: module.Page404})));

export function Router() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />}></Route>
            <Route path='/:category'>
              <Route index element={<PrivateRoute><Category /></PrivateRoute>} />
              <Route path=':id' element={<PrivateRoute><Detail /></PrivateRoute>} />
            </Route>
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/404' element={<Page404 />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  )
};