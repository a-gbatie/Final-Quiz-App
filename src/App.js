import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import HomePage from './components/HomePage';
import Questions from './components/Questions';
import ScorePage from './components/ScorePage';


function App() {
  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/questions' element={<Questions/>} />
        <Route path='/score' element={<ScorePage/>} />
      </Routes>
    </Router>
  )
}

export default App;
