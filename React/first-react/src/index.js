import React from "react"
import ReactDOM from "react-dom/client"

const page = (
    <div>
        <nav>
            <h1>Oleksandra</h1>
            <ul>
                <li>Machine Learning</li>
                <li>Frontend Programming</li>
                <li>Embedded Systems</li>
            </ul>
        </nav>
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


console.log(page)
// ReactDOM.render(navbar, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(page)
