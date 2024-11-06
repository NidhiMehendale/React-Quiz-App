import React from 'react'

function QuizResult(props) {
  return (
    <React.Fragment>
   
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <p style={{color:'green', fontSize:'33px'}}>
    {props.score === props.totalScore ? "Congratulations!": ""} 
    </p> 
    <button id="next-button" onClick={props.playAgain}>
    {props.score < props.totalScore ? "Try Again" : "Play Again "}
    </button>
    </React.Fragment>
  )
}

export default QuizResult;