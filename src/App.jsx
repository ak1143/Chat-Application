import React,{ lazy, Suspense} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectiveRoute from './components/auth/ProtectiveRoute'
import { LayoutLoader } from './components/layout/Loaders'

const Home = lazy(()=> import('./pages/Home'))
const Groups = lazy(()=> import('./pages/Groups'))
const Chat = lazy(()=> import('./pages/Chat'))
const Login = lazy(()=> import('./pages/Login'))
const NotFound = lazy(()=> import('./pages/NotFound'))

const AdminLogin= lazy(()=>import('./pages/admin/AdminLogin'));
const Dashboard = lazy(()=>import('./pages/admin/Dashboard'))
const UserManagement = lazy(()=>import('./pages/admin/UserManagement'))
const ChatManagement = lazy(()=>import('./pages/admin/ChatManagement'))
const MessageManagement = lazy(()=>import('./pages/admin/MessageManagement'))


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
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admin/dashboard' element={<Dashboard />}/>
        <Route path='/admin/users-management' element={<UserManagement />}/>
        <Route path='/admin/chats-management' element={<ChatManagement />}/>
        <Route path='/admin/messages-management' element={<MessageManagement />}/>
        
        <Route path='*' element={<NotFound/>} />

        </Routes>
      </Suspense>

    </BrowserRouter>
  )
}

export default App
