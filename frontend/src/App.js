import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DripVisualizer from './components/DripVisualizer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DripVisualizer />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;