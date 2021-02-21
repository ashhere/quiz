import React, { useState , useContext} from 'react';
import Menu from './component/Menu';
import Qns from './component/Qns';
import Endscreen from './component/Endscreen'
import {QuizContext} from './Helper/Context'
import './App.css';

function App() {

const [gameState ,setGameState] = useState('menu');
const [score, setScore] = useState(0);
const [name , setName] = useState("");

  return (
    <>
    <div className="App">
     
      
      <QuizContext.Provider value = {{ gameState , setGameState, score, setScore ,name , setName }}>

      { gameState === "menu" && <Menu /> }
      { gameState === "qns" && <Qns /> }
      { gameState === "endscreen" && <Endscreen /> }
      
      </QuizContext.Provider>
    </div> 
    </> 
  );
}

export default App;
