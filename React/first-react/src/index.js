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

const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

// ReactDOM.render(navbar, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(navbar)
ReactDOM.createRoot(document.getElementById("root-2")).render(page)