import React, { useContext, useState } from 'react';
import {Question} from '../Helper/Question'
import {QuizContext} from '../Helper/Context'


function Qns(){

    const {score , setScore , gameState , setGameState} = useContext(QuizContext)
    const [currQuestion , setCurrQuestion] = useState(0)
    
    const [opChoosen , setOpChoosen] = useState("")


   

    const qnsChange = () =>{
        if (Question[currQuestion].answer === opChoosen) {
            setScore(score+1)
        }
        
        setCurrQuestion(currQuestion + 1)
    }
    
    const finisQuiz = () =>{
        if (Question[currQuestion].answer === opChoosen) {
            setScore(score+1)
        }
        setGameState("endscreen")
    }
      
    return(
        <>
            <div className = "Qns">

              
            <h1>Qns no.{currQuestion +1 } is :{Question[currQuestion].prompt}</h1>
           
            <button className="qns-btn" onClick={()=> setOpChoosen("A")}>{Question[currQuestion].optionA}</button>
            <button className="qns-btn" onClick={()=> setOpChoosen("B")}>{Question[currQuestion].optionB}</button>
            <button className="qns-btn" onClick={()=> setOpChoosen("C")}>{Question[currQuestion].optionC}</button>
            <button className="qns-btn" onClick={()=> setOpChoosen("D")}>{Question[currQuestion].optionD}</button>
            {/* <button onClick={()=> scoreResult()}>Submit</button> */}

            
            {currQuestion === Question.length -1 ? (
                <button className="last-btn" onClick = {()=> finisQuiz() }>Finsied Quiz</button>
            ) : <button className="last-btn" onClick = {()=> qnsChange()}>Next Questions</button>
            }
            </div>

           

        </>
    )
}

export default Qns;