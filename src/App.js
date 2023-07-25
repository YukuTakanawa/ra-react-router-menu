import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <div>
          <Menu />
          <div className='page'>
              <Routes>
            <Route path='/home' exact element={<HomePage />} />
            <Route path='/drift' exact element={<DriftPage />} />
            <Route path='/timeattack' exact element={<TimeAttackPage />} />
            <Route path='/forza' exact element={<ForzaPage />} />
            </Routes>
          </div>
        </div>
    
      
    </BrowserRouter>
  )
}

export default App;