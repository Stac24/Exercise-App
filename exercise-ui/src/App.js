import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import CreateExercisePage from './pages/CreateExercisePage.js';
import EditExercisePage from './pages/EditExercisePage.js';
import Navigation from './components/Navigation.js';
import { useState } from 'react';


function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className='globalheader'>
        <h1>Start your fitness journey today! Record your progress below: </h1>
        </div>
        <div className="App-header">
            <Route path="/" exact>
               <HomePage setExerciseToEdit={setExerciseToEdit} />
            </Route>
            <Route path="/create-exercise">
              <CreateExercisePage />
            </Route>
            <Route path="/edit-exercise">
              <EditExercisePage exerciseToEdit = {exerciseToEdit}/>
            </Route>
        </div>
        <footer className='footer'>
          &copy; 2022 Stephanie Cox 
        </footer>
      </Router>
    </div>
  );
}

export default App;
