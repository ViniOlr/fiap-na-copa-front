import React from 'react';
import Header from './Components/Header/Header';
import './App.css'
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import FigsNacionais from './Components/FigsNacionais/FigsNacionais';
import FigsInternacionais from './Components/FigsInternacionais/FigsInternacionais';

function App() {
  return (
    <>
      <Header />
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <FigsNacionais /> */}
      <FigsInternacionais />
      <Footer />
    </>
  );
}

export default App;
