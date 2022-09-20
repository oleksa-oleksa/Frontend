import { useState, useEffect } from 'react'
import './App.css'
import Cube from './Cube/Cube'

function App() {

  /* Write a function (allNewDice) that returns an array 
  * of 10 random numbers between 1-6 inclusive. */ 

  function allNewDice() {
    // new array to hold my numbers
    let randomNumbers = []
    // loop 10 times
    for (i = 0; i < 10; i++) {
        // push a random number from 1-6 to my array
        randomNumbers.push(Math.floor(Math.random() * 6))
    }  
    // return array
    return randomNumbers
  }

  /* Create state to hold our array of numbers. (Initialize
  * the state by calling our `allNewDice` function so it 
  * loads all new dice as soon as the app loads) */
 const [randomNumbers, setRandomNumbers] = useState(allNewDice)

  return (
    <div className="App">
      <main>
      <div className="cube-container">
        <Cube number={allNewDice}></Cube>
        <Cube number='2'></Cube>
        <Cube number='3'></Cube>
        <Cube number='4'></Cube>
        <Cube number='5'></Cube>
        <Cube number='6'></Cube>
        <Cube number='7'></Cube>
        <Cube number='8'></Cube>
        <Cube number='9'></Cube>
        <Cube number='3'></Cube>   
      </div>
       
      </main>
      
    </div>
  )
}

export default App
