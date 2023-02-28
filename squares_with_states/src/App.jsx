import React from "react"
import Box from "../components/Box"
import boxes from "./boxes"

function App() {

const [squares, setSquares] = React.useState(boxes)

const squaresElement = squares.map(square => (
  <Box
    key={square.id}
    id={square.id}
    on={square.on}
    toggle={() => toggle(square.id)}
  />
))

function toggle(id) {
  setSquares(prevSquares => {
    return prevSquares.map((square) => {
      return (
        square.id === id ? {...square, on: !square.on} : square
      )
    })
  })
}

return (
    <main>
      {squaresElement}
    </main>
  )
}

export default App
