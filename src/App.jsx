import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';

function App() {
    return (
      <Router basename="/Laba7">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </Router>
    );
}

export default App;
