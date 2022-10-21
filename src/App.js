import React from 'react';
import Header from './Components/Header/Header';
import './App.css'
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Header />
      {/* <Login /> */}
      <Home />
      <Footer />
    </>
  );
}

export default App;
