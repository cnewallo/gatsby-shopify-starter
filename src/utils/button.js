import React from "react"
import { Link } from "gatsby"

import "../pages/products"
import "../styles/button.css"

const Button = () => {
    return (
        <div>
            <Link to="/stores/" class="btn btn-full">SHOP NOW</Link>
        </div>
    )
}

export default Button