import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const ProductsPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1></h1>
    <ProductGrid />
  </>
)

export default ProductsPage
