import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Oleksandra</h1>
        <ul>
            <li>Machine Learning</li>
            <li>Frontend</li>
            <li>Embedded Systems</li>
        </ul>
    </nav>
)

// ReactDOM.render(navbar, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(navbar)