import React from 'react'
import { Link } from 'gatsby'


import HEADER from '~/components/header'
import NAV from '~/components/nav'
import ABOUT from '~/components/abouts'
import TESTIMONIALS from '~/components/testimonials'
import FOOTER from '~/components/footer'


const IndexPage = () => (
    <>

        <HEADER />
        <NAV />
        <ABOUT />
        <TESTIMONIALS />
        <FOOTER />
    </>
)

export default IndexPage

//* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> 
// import SEO from '~/components/seo'