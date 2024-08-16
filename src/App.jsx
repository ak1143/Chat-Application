import React,{ lazy, Suspense} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectiveRoute from './components/auth/ProtectiveRoute'
import { LayoutLoader } from './components/layout/Loaders'

const Home = lazy(()=> import('./pages/Home'))
const Groups = lazy(()=> import('./pages/Groups'))
const Chat = lazy(()=> import('./pages/Chat'))
const Login = lazy(()=> import('./pages/Login'))
const NotFound = lazy(()=> import('./pages/NotFound'))

let user = true;

function App() {

  return (
    <BrowserRouter>

      <Suspense fallback={<LayoutLoader/>}>
      <Routes>

        <Route element={<ProtectiveRoute user={user} />}>
          <Route path='/' element={<Home/>} />
          <Route path='/groups/' element={<Groups/>} />
          <Route path='/chat/:chatId' element={<Chat/>} />
        </Route>

        <Route path='/login' element={
            <ProtectiveRoute user={!user}>
              <Login />
            </ProtectiveRoute>
        } />

        <Route path='*' element={<NotFound/>} />

        </Routes>
      </Suspense>

    </BrowserRouter>
  )
}

export default App
