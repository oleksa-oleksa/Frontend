import React from "react"
import reactLogo from '../src/assets/react.svg'


export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="react_logo" alt="React logo"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 2</h4>
        </nav>
    )
}