import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Abouts from './Pages/Abouts';
import Testimonials from './Pages/Testimonials';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <Router>
        <div className ="App">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/abouts' element={<Abouts />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </div>
  </Router>
  ); 
}

export default App;
