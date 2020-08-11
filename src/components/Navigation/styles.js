import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: rgba(185, 181, 181, 0.904);
  margin-bottom: 0px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.45rem;
  margin: 0 auto;
  max-width: auto;
`

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  font-family: Georgia;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`






