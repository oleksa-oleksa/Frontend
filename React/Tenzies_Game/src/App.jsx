import React from "react"
import { useState, useEffect } from 'react'
import './App.css'
import Cube from './Cube/Cube'

function App() {
  /* Create state to hold our array of numbers. (Initialize
  * the state by calling our `allNewDice` function so it 
  * loads all new dice as soon as the app loads) */
  const [randomNumbers, setRandomNumbers] = useState(allNewCubes)

  /* Write a function (allNewDice) that returns an array 
  * of 10 random numbers between 1-6 inclusive. */ 

  function allNewCubes() {
    const newCubes = []
        for (let i = 0; i < 10; i++) {
          /* Challenge: Update the array of numbers in state to be
          * an array of objects instead. Each object should look like:
          * { value: <random number>, isHeld: false } */
          newCubes.push({
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: i
          })
        }
        return newCubes
  }

  /* Map over the state numbers array to generate our array
  * of Die elements and render those in place of our
  * manually-written 10 Die elements */
  const cubeElements = randomNumbers.map(cube => <Cube key={cube.id} value={cube.value} isHeld={cube.isHeld} holdCube={() => holdCube(cube.id)}/>)
  
  /* Challenge: Create a function `holdDice` that takes
  * `id` as a parameter. */

  function holdCube(id) {
    // console.log(id)
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
      <div className="cube-container">
        {cubeElements}
      </div>
      <button type="button" className="button--roll">Roll</button>
      </main>
      
    </div>
  )
}

export default App
