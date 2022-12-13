import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Container } from '@mui/material';
import { Box } from '@mui/material'

import HomePage from './components/HomePage';
// import Questions from './components/Questions';
import ScorePage from './components/ScorePage';
import QuestionsApi from './components/QuestionsApi';


function App() {
  return ( 
    <Router>
      <Container>
        <Box textAlign='center' mt={5}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          {/* <Route path='/questions' element={<Questions/>} /> */}
          <Route path='/quiz' element={<QuestionsApi/>} />
          <Route path='/score' element={<ScorePage/>} />
        </Routes>
        </Box>
      </Container>
    </Router>
  )
}

export default App;
