import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import { Container } from './LayoutStyles'
import MobileMenu from "../components/MobileMenu/MobileMenu"

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header className="header" />
      <MobileMenu className="mobile-menu" />
      <main>{ children }</main>
      <Footer />
    </Container>
  )
}
