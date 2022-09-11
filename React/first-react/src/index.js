import React from "react"
import ReactDOM from "react-dom/client"

function Header() {
    return(
        <div>
            <header>
                <nav className="nav">
                    <logo>
                        <img src="logo192.png" width="40px" alt="Logo"/>
                    </logo>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

function Footer() {
    return (
        <small>Oleksandra Baga learns React, 2022</small>
    )
}

function Content() {
    return (
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
}

function Page() {
    return(
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

// ReactDOM.render(navbar, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(<Page />)
