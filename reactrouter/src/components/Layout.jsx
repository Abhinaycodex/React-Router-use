import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'


function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout