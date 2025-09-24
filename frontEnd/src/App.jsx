import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import InsertIdea from './pages/InsertIdea'
import Reviews from './pages/Reviews';

const App = () => {
  return (
    <div>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/indata" element={<InsertIdea/>}/>
         <Route path="/review/:bookName" element={<Reviews />} />
       </Routes>
    </div>
  )
}

export default App
