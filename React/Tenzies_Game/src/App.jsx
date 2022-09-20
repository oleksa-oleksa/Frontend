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
          newCubes.push(Math.ceil(Math.random() * 6))
        }
        return newCubes
  }

  /* Map over the state numbers array to generate our array
  * of Die elements and render those in place of our
  * manually-written 10 Die elements */
  const cubeElements = randomNumbers.map(die => <Cube value={die} />)
  return (
    <div className="App">
      <main>
      <div className="cube-container">
        {cubeElements}
      </div>
       
      </main>
      
    </div>
  )
}

export default App
