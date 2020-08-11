import React from "react"
import { Link } from "gatsby"
import NAV from '~/components/nav'
import FOOTER from '~/components/footer'
import "../styles/stores.css"
import "../styles/normalize.css"
import portrait1 from "../images/product10.jpg"
import portrait2 from "../images/product11.jpg"
import portrait3 from "../images/roots1.jpg"
import portrait4 from "../images/roots2.jpg"
import portrait5 from "../images/product12.jpg"
import portrait6 from "../images/product13.jpg"
import portrait7 from "../images/roots3.jpg"
import portrait8 from "../images/roots4.jpg"

const Product = () => {
    return (
        <div>
            <NAV />
            <section class="section-product">
                <div class="col">
                    <h2><Link to="/products/" class="heading3">Shop Rasta Feng</Link></h2>
                </div>
                <div class="col">
                    <h3><Link to="/products/" class="heading4">Shop Roots Lab TT</Link></h3>
                </div>
                <div class="grid-container">
                    <div class="grid-item-cc">
                        <img src={portrait1} alt="RASTA FENG" />
                    </div>
                    <div class="grid-item-bb">
                        <img src={portrait2} alt="RASTA FENG" />
                    </div>
                    <div class="grid-item-aa">
                        <img src={portrait3} alt="RASTA FENG" />
                    </div>
                    <div class="grid-item-dd">
                        <img src={portrait4} alt="RASTA FENG" />
                    </div>
                    <div class="grid-item-c">
                        <img src={portrait5} alt="RASTA FENG" />
                    </div>
                    <div class="grid-item-b">
                        <img src={portrait6} alt="RASTA FENG" />
                    </div>
                    <div class="grid-item-a">
                        <img src={portrait7} alt="RASTA FENG" />
                    </div>
                    <div class="grid-item-d">
                        <img src={portrait8} alt="RASTA FENG" />
                    </div>
                    <div class="vl"></div>
                </div>
            </section>
            <section>
                <FOOTER />
            </section>
        </div>
    )
}

export default Product 