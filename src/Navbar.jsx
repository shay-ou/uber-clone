import React from "react"
export default function Navbar() {
    return (

        <nav className="nav">
            <div className="nav-logo">Uber</div>
            <ul className="nav-items1">
                <li>Ride</li>
                <li>Drive</li>
                <li>Business</li>
                <li>About</li>
            </ul>
            <ul className="nav-items">

                <li>Log in</li>
                <li>Sign up</li>
            </ul>
        </nav>

    )
}