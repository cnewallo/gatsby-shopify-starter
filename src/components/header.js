import React from "react"
//import { Link } from "gatsby"

import Button from "../utils/button"
import "../styles/header.css"
import logo from "../images/RFLogo.png"
const Header = () => {
    return (
        <div>
            <header>
                <img src={logo} alt="RASTA FENG" class="logo" />
                <div class="hero-text-box">
                    <h1> - "A Branded Lifestyle" </h1>
                </div>
                <Button />
            </header>
        </div>
    )
}

export default Header