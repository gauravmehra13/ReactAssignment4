
import React from 'react';
import './App.css';
import './Components/Style.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact'
import Student from './Components/Student'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import Edit from './Components/Edit';
import AddStudent from './Components/AddStudent';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route Path='/' element={<Navbar />} />
        <Route path='/home' element={< Home />} />
        <Route path='/student' element={< Student />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/add' element={<AddStudent />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </>
  )
}

export default App;