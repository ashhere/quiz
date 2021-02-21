import React , {useContext} from 'react';
import {QuizContext} from "../Helper/Context"
import {Question} from "../Helper/Question"
function Endscreen(){

    const {score , setScore , gameState , setGameState , name , setName} = useContext(QuizContext)

    const play = () => {
        setScore(0)
        setGameState("qns")
    }

    const mainmenu = () =>{
        setScore(0)
        setGameState("menu")
        setName("")
    }
    return(
        <>
            <div className = "Endscreen">
            <h1> {name} your Score is : {score} / {Question.length} </h1>

            <button className="firstlast-btn" onClick={()=> play()}>Play Again</button>
            <button className="firstlast-btn" onClick={()=> mainmenu()}>Main menu</button>
            </div>

        </>
    )
}

export default Endscreen;