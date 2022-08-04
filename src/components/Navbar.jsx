import React from "react"
import logo from "../assets/images/logo.png"
export default function Navbar(){
    return (
        <header>
            <div className="logo">
                <img className="logo-image" src={ logo } alt="logo" />
                <h2 className="logo-text">my travel project.</h2>
            </div>
        </header>
    )
}