import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import InsertIdea from './pages/InsertIdea'
import Reviews from './pages/Reviews';
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminAllReviews from './pages/AdminAllReviews'

const App = () => {
  return (
    <div>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/indata" element={<InsertIdea/>}/>
         <Route path="/review/:bookName" element={<Reviews />} />
         <Route path="/adlogin" element={<AdminLogin/>}/>
         <Route path="/admdash" element={<AdminDashboard/>}/>
         <Route path="/getall" element={<AdminAllReviews/>}/>
       </Routes>
    </div>
  )
}

export default App
