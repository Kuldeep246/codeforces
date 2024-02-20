import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Background from './pages/Backgound';

export default function App() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Background />
      </div>
      <div className="relative z-10">
        <Header />
      </div>
     <div className='relative z-10'>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route path="/dashboard/:username" element={<Dashboard />} />
        </Routes>
      </Router>
     </div>
    </div>
  );
}
