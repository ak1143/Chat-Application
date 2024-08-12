import React,{ useState ,lazy} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectiveRoute from './components/auth/ProtectiveRoute'

const Home = lazy(()=> import('./pages/Home'))
const Groups = lazy(()=> import('./pages/Groups'))
const Chat = lazy(()=> import('./pages/Chat'))
const Login = lazy(()=> import('./pages/Login'))
const NotFound = lazy(()=> import('./pages/NotFound'))

let user = false;

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<ProtectiveRoute user={user} />}>
          <Route path='/' element={<Home/>} />
          <Route path='/groups' element={<Groups/>} />
          <Route path='/chat' element={<Chat/>} />
        </Route>

        <Route path='/login' element={
            <ProtectiveRoute user={!user}>
              <Login />
            </ProtectiveRoute>
        } />
        
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
