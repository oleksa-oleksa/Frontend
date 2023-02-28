import React from "react"
import logo from '../src/assets/logo.png'


export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" alt="Logo"/>
        </nav>
    )
}