import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Routes>
            <Route path="/messages" element={<Dialogs />} />
          </Routes>
          <Routes>
            <Route path="/news" element={<Profile />} />
          </Routes>
          <Routes>
            <Route path="/music" element={<Dialogs />} />
          </Routes>
          <Routes>
            <Route path="/settings" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
