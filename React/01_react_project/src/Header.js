import React from "react"

export default function Header() {
    return(
        <div>
            <header>
                <nav className="nav">
                    <logo>
                        <img className="logo" src="logo192.png" alt="Logo"/>
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
