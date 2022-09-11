import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"


function App() {
    return(
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

// ReactDOM.render(navbar, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(<App />)
