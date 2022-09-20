import React from "react"
import { useState, useEffect } from 'react'
import './App.css'
import Cube from './Cube/Cube'

function App() {
  /* Create state to hold our array of numbers. (Initialize
  * the state by calling our `allNewDice` function so it 
  * loads all new dice as soon as the app loads) */
  const [randomNumbers, setRandomNumbers] = useState(allNewCubes)

  /* Add new state called `tenzies`, default to false. It
  *  represents whether the user has won the game yet or not. */
  const [tenzies, setTenzies] = useState(false)
  
  /* Add an effect that runs every time the `dice` state array 
  *  changes. For now, just console.log("Dice state changed"). */
  useEffect(() => {
    /* Challenge: Check the dice array for these winning conditions:
    * 1. All dice are held, and */
    const allHeld = randomNumbers.every(num => num.isHeld)

    /* 2. all dice have the same value */
    const firstValue = randomNumbers[0].value
    const allSameValues = randomNumbers.every(num => num.value === firstValue)

    if (allHeld && allSameValues) {
      setTenzies(true)
    }
  }, randomNumbers)

  // DRY 
  function generateRandomCube(i) {
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: i
    }
  }
  
  /* Write a function (allNewDice) that returns an array 
  * of 10 random numbers between 1-6 inclusive. */ 
  function allNewCubes() {
    const newCubes = []
        for (let i = 0; i < 10; i++) {
          /* Challenge: Update the array of numbers in state to be
          * an array of objects instead. Each object should look like:
          * { value: <random number>, isHeld: false } */
          newCubes.push(
            generateRandomCube(i)
          )
        }
        return newCubes
  }

  /* Map over the state numbers array to generate our array
  * of Die elements and render those in place of our
  * manually-written 10 Die elements */
  const cubeElements = randomNumbers.map(cube => <Cube key={cube.id} value={cube.value} isHeld={cube.isHeld} holdCube={() => holdCube(cube.id)}/>)
  

  function rollCube() {
  /* Challenge: Update the `rollDice` function to not just roll
  * all new dice, but instead to look through the existing dice
  * to NOT role any that are being `held`.*/
    if (tenzies) {
      setRandomNumbers(allNewCubes)
      setTenzies(false)
    } else {
        setRandomNumbers(prevRandNum => prevRandNum.map(num => {
          return num.isHeld ?  num : generateRandomCube(num.id)
    }))
    }
  }


  function holdCube(id) {
    /* Challenge: Update the `holdDice` function to flip
    * the `isHeld` property on the object in the array
    * that was clicked, based on the `id` prop passed
    * into the function. */
    setRandomNumbers(prevRandNum => prevRandNum.map(num => {
      return num.id === id ? {...num, isHeld: !num.isHeld} : num
    }))
      
   
  }

  return (
    <div className="App">
      <main>
      <div className="title">Tenzies</div>
            <p className="instructions">Roll until all cubes are the same. 
            Click each cube to freeze it at its current value between rolls.
            </p>
      <div className="cube-container">
        {cubeElements}
      </div>
      <button type="button" className="button--roll" onClick={rollCube}>{tenzies? "New game" : "Roll"}</button>
      </main>
      
    </div>
  )
}

export default App
