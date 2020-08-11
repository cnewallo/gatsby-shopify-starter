import React from "react"
import "../styles/footer.css"
import "../styles/grid.css"
import "../styles/normalize.css"

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="col span-1-of-2">
                    <ul class="footer-nav">
                        <li><a>About us</a></li>
                        <li><a>Shop Rasta Feng</a></li>
                        <li><a>Shop Roots Lab TT</a></li>
                        <li><a>iOS App</a></li>
                        <li><a>Android App</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer