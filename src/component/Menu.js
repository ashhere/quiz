import React,{useContext, useEffect, useState} from 'react';
import { QuizContext } from '../Helper/Context';

function Menu(){

    const { gameState , setGameState,name , setName} = useContext(QuizContext);

    



    console.log(name);

    // const changeState = ()=> {
    //     setGameState("qns")
    //     console.log(setGameState)
    // }
    return(
        <>
            <div className = "Menu">
            
                <div className = "name">
                <input className="input" type = "text" onChange = {(event)=>setName(event.target.value) } placeholder = "  Enter your name"></input>
                </div>
                <button className="firstlast-btn" onClick = {()=> setGameState('qns')}>Start  Quiz</button>
                
            </div>

        </>
    );
}

export default Menu;