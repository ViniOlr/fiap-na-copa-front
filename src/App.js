import React from 'react';
import Header from './Components/Header/Header';
import './App.css'
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import FigsNacionais from './Components/FigsNacionais/FigsNacionais';
import FigsInternacionais from './Components/FigsInternacionais/FigsInternacionais';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />  } />
            <Route path='/figsNacionais' element={<FigsNacionais />  } />
            <Route path='/figsInternacionais' element={<FigsInternacionais />  } />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
